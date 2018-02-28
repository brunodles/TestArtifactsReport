import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import { ListItem, ListItemText } from 'material-ui/List';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Hidden from 'material-ui/Hidden';
import Divider from 'material-ui/Divider';
import MenuIcon from 'material-ui-icons/Menu';

import { menuItemsBuilder, None } from './tileData';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    width: '100%',
    // height: 600,
    zIndex: 1,
    // overflow: 'hidden',
    padding: 0,
    marggin: 0
  },
  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  appBar: {
    position: 'absolute',
    marginLeft: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  drawerHeader: theme.mixins.toolbar,
  drawerTitle: {
    margin: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
  },
  drawerPaper: {
    width: 250,
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      position: 'relative',
      height: '100%',
    },
  },
  content: {
    backgroundColor: theme.palette.background.default,
    width: '100%',
    padding: theme.spacing.unit * 3,
    height: 'calc(100% - 56px)',
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px)',
      marginTop: 64,
    },
  },
});

function findTitle(data) {
  try {
    return data.testartifacts.buildInfo.projectName;
  } catch(error){
    return "Unknown";
  }
}

class Report extends React.Component {

  state = {
    mobileOpen: false,
    title: "Test Artifacts",
    contentTag : None,
    menuItems : null,
  };

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  clickHandlerFor(obj) {
    return () => {
      this.setState({
        title: obj.name,
        contentTag: obj.contentTag
      })
    }
  }

  componentDidMount() {
    const menuItems = menuItemsBuilder(this.props.data);
    const item = menuItems[0];
    this.setState({
      title: item.name,
      contentTag: item.contentTag,
      menuItems : menuItems,
    });
  }

  render() {
    const { classes, theme } = this.props;

    if (this.state.menuItems == null) {
      return (<h1>Ops</h1>);
    }

    const drawerItems = this.state.menuItems.map((obj) => {
      if (obj.name === "divider") {
        return (<Divider key={obj.key}/>);
      }
      return (
        <ListItem button key={obj.name} onClick={this.clickHandlerFor(obj)}>
          <ListItemText primary={obj.name} />
        </ListItem>
      );
    });
    const drawer = (
      <div>
        <div key="header" className={classes.drawerHeader} >
          <Typography variant="display1" className={classes.drawerTitle}>
            {findTitle(this.props.data)}
          </Typography>
        </div>
        <Divider key="divider99"/>
        {drawerItems}
      </div>
    )
    const ContentTag = this.state.contentTag;
    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={this.handleDrawerToggle}
                className={classes.navIconHide}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="title" color="inherit" noWrap>
                {this.state.title}
              </Typography>
            </Toolbar>
          </AppBar>
          <Hidden mdUp>
            <Drawer
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={this.state.mobileOpen}
              classes={{
                paper: classes.drawerPaper,
              }}
              onClose={this.handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden smDown implementation="css">
            <Drawer
              variant="permanent"
              open
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <main className={classes.content}>
            <ContentTag data={this.props.data}/>
          </main>
        </div>
      </div>
    );
  }
}

Report.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Report);
