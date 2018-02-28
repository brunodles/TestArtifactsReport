import CurrentBuild from '../currentbuild/CurrentBuild'
// import Test from '../test/CurrentBuild'

const items = [
  {name: "Dashboard", contentTag: None},
  {name: "Current Build", contentTag: CurrentBuild},
  {name: "divider", contentTag: None, key:"divider1"},
  {name: "Coverage", contentTag: None},
  {name: "Checkstyle", contentTag: None},
  {name: "Test", contentTag: None},
];

export function menuItemsBuilder(data) {
  const keys=Object.keys(data);
  // check if first key is a buildNumber, then remove dashboard
  if (!Number.isInteger(keys[0])) {
    return items.slice(1, items.length);
  }
  return items;
};

export function None() {
  return null;
}
