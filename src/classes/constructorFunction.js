function Building({ name, stories, address }) {
  this.name = name;
  this.stories = stories;
  this.address = address;

  this.info = function () {
    return {
      name: this.name,
      stories: this.stories,
      address: this.address,
    };
  };
}

const empireState = new Building({
  name: 'Empire State Building',
  stories: 'XXXXXX',
  address: '3405 bindfing ct',
});

console.log({ empireState, myInfo: empireState.info() });
