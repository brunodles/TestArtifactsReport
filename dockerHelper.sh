#!/bin/bash
readonly DEFAULT_IMAGE=true
readonly IMAGE_NAME=$([[ "$DEFAULT_IMAGE" == "true" ]] && echo "node:9.4" || echo "node_react")
readonly CONTAINER_NAME=${IMAGE_NAME%%:*}_${PWD##*/}
readonly PORTS=3000:5000

main() {
  case $1 in
    create)
      create
    ;;
    run)
      run
    ;;
    restart)
      restart
    ;;
    exec)
      exec
    ;;
    rootExec)
      rootExec
    ;;
    stop)
      stop
    ;;
    kill)
      kill
    ;;
    rm)
      rm
    ;;
    rmi)
      rmi
    ;;
    var|vars)
      vars
    ;;
    help|--help|-h)
      help
    ;;
    *)
      echo "Option \"$1\" not found!"
      help
    ;;
  esac
}

command() {
  echo $([[ -z "${@:2}" ]] && echo "bash" || echo ${@:2})
}

create() {
  if [ "$DEFAULT_IMAGE" == "true" ]; then
    echo "No need to create, using default node image"
  else
  docker image build -t $IMAGE_NAME . -f-<<EOF
FROM node:9.4

USER node
RUN mkdir /home/node/.npm-global
ENV PATH=/home/node/.npm-global/bin:$PATH
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global

RUN npm install -g create-react-app
USER root
EOF
  fi
}

run() {
  (
    docker run -it -v "$(pwd):/home/node/app" -w "/home/node/app" --user=node -p $PORTS --name $CONTAINER_NAME $IMAGE_NAME $(command)
  ) || (
    echo "Trying -> \"$0 restart\""
    restart $(command)
  )
}

restart() {
  echo "Restarting"
  docker restart $CONTAINER_NAME
  exec $(command)
}

exec() {
  (
    docker exec -it $CONTAINER_NAME $(command)
  ) || (
    echo "Did it failed? Try \"$0 bash\""
  )
}

rootExec() {
  (
    docker exec -u 0 -it $CONTAINER_NAME ${@:2}
  ) || (
    echo "Error"
  )
}

stop() {
  echo "Stopping"
  docker stop --time 30 $CONTAINER_NAME
}

kill() {
  echo "Killing"
  docker stop $CONTAINER_NAME
}

rm() {
  echo "Removing container"
  docker rm $CONTAINER_NAME
}

rmi() {
  echo "Removing image"
  docker rmi $IMAGE_NAME
}

vars() {
  echo DEFAULT_IMAGE=$DEFAULT_IMAGE
  echo IMAGE_NAME=$IMAGE_NAME
  echo CONTAINER_NAME=$CONTAINER_NAME
  echo PORTS=$PORTS
  echo command=$(command)
}

help() {
  cat <<-TEXT
Docker Helper
Useful scripts to work with docker.

Usage $0 [option]

Options:
create          Create the node react image
run [command] 	Start image with
restart         Restart container
exec [command]  Connect to a running container
stop            Stop running container
kill            Kill running container
rm              Remove container
rmi             Remove image
vars            Show vars
help            Show this help
TEXT
}

main $@
