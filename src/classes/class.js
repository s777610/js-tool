class Building {
  constructor({ name, stories, address }) {
    this.name = name;
    this.stories = stories;
    this.address = address;
    this.guests = [];
  }

  info() {
    return {
      name: this.name,
      stories: this.stories,
      address: this.address,
    };
  }

  get needElevator() {
    return this.stories > 10;
  }

  set guest(guest) {
    this.guests.push(guest);
  }
}

const empireState = new Building({
  name: 'Empire State Building',
  stories: 61,
  address: '3405 bindfing ct',
});
empireState.guest = 'J. Willy';
empireState.guest = 'H. Wilson';

console.log({
  empireState,
  myInfo: empireState.info(),
  ifNeedElevator: empireState.needElevator,
  guests: empireState.guests,
});
