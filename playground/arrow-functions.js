const square = x => x * x;

console.log(square(4));

const person = {
  name: 'Giuseppe',
  sayHi () {
    console.log(`Hi, I am ${this.name}`);
  }
};

person.sayHi();
