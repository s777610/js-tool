class Structure {
  constructor() {
    this.isStructure = true;
    this.humanMade = true;
  }
}

class Building extends Structure {
  constructor({ name, stories, address }) {
    super();
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

class Restaurant extends Building {
  constructor({ name, stories, address, cuisine }) {
    super({ name, stories, address });
    this.cuisine = cuisine;
  }

  info() {
    return {
      buildingInfo: super.info(),
      restaurantInfo: `We serve ${this.cuisine} cusine`,
    };
  }
}

const kaiju = new Restaurant({
  name: 'Kaiju',
  stories: 2,
  address: '485 road, apt 902',
  cuisine: 'Japanese',
});

console.log({
  kaiju,
  info: kaiju.info(),
});
