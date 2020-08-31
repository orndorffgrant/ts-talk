class Cat {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  meow(): string {
    return `${this.name} says: meow`
  }
}

const meowAreYou = (cat: Cat) => {
  console.log(`${cat.meow()} are you?`)
}

const bella = new Cat("bella");
const stella = new Cat("stella");

meowAreYou(bella);
meowAreYou(stella);
















class Dog {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  bark(): string {
    return `${this.name} says: bark`
  }
}

const fergie = new Dog("fergie");

// meowAreYou(fergie);
