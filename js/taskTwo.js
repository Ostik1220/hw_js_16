class User {
  constructor({name, age, followers}) {
    this.name = name;
    this.age = age;
    this.followers = followers;
  }
  getInfo() {
    return `імя ${this.name}, вік ${this.age}, підписники ${this.followers}`;
  }
}


const mango = new User({
  name: "Mango",
  age: 2,
  followers: 20,
});

console.log(mango.getInfo()); // User Mango is 2 years old and has 20 followers

const poly = new User({
  name: "Poly",
  age: 3,
  followers: 17,
});

poly.getInfo(); // User Poly is 3 years old and has 17 followers
