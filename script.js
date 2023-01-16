'use strict';

// // construction function(not array function)

const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  //   Bad practise - never created methods inside the construction function  - tworzy się za każdym razem tworzenia nowego objektu
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};

const iryna = new Person('Iryna', 1998); //it is an instance of person
console.log(iryna);

// // 1. New {} is created
// // 2. function is called, this = {}
// // 3. {} linked to ptototype
// // 4. function autometicaly return{}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);

console.log(matilda, jack);

const jay = 'Jay';
console.log(iryna instanceof Person); //true
console.log(jay instanceof Person); //false

// Static methods
Person.hey = function () {
  console.log(`Hey there!`);
  console.log(this);
};
Person.hey();
// is not inherited
// iryna.hey()//nie zadziała
// // Prototypes
// console.log(Person.prototype); //tutaj już istnieje metoda calcAge()

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// iryna.calcAge(); //zwraca wiec
// matilda.calcAge();
// console.log(iryna.__proto__); // - to jest prototyp obiektu, to samo co właściwość prototypu funkcji konstruktora
// //{calcAge: ƒ, constructor: ƒ}
// // calcAge: ƒ ()
// // constructor: ƒ (firstName, birthYear)
// // [[Prototype]]: Object
// console.log(iryna.__proto__ === Person.prototype); //true
// console.log(Person.prototype.isPrototypeOf(iryna)); //true

// Person.prototype.species = 'Homo Sapiens';
// console.log(iryna, matilda.species);

// console.log(iryna.hasOwnProperty('firstName')); ///true

// console.log(iryna.hasOwnProperty('species')); //false - ponieważ nie jest bezpośrednią właściwością, tylko właściwością prototypu

// console.log(iryna.__proto__); //

// console.log(iryna.__proto__.__proto__); //Object.prototype(top of prototype chain)

// console.log(iryna.__proto__.__proto__.__proto__); //null

// console.dir(Person.prototype.constructor);

// const arr = [233, 546, 32, 21, 3, 1, 1, 1]; // new Array === []
// console.log(arr.__proto__); //tutaj mamy wszystkie potrzebne metody
// console.log(arr.__proto__ === Array.prototype); //true

// console.log(arr.__proto__.__proto__);
// // Możemy stworzyć własną metode na prototype kontsruktora, która będzie dostępna dla wszystkich objektów tego konstruktora, ale zwykle to nie jest dobry pomysł
// Array.prototype.unique = function () {
//   return [...new Set(this)];
// }; //zwróci tylko unikalne wartości
// console.log(arr.unique());

// const h1 = document.querySelector('h1');

// console.dir(h1); //zwraca object ze wszystkimi właściwościami
// console.dir(h1.__proto__); //zwraca object - HTMLHeadingElement
// console.dir(h1.__proto__.__proto__); //HTMLElement
// console.dir(h1.__proto__.__proto__.__proto__); //Element
// console.dir(h1.__proto__.__proto__.__proto__.__proto__); //Node
// console.dir(h1.__proto__.__proto__.__proto__.__proto__.__proto__); //EventTarget
// console.dir(h1.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__); //Object
// console.dir(
//   h1.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__
// ); //null

// console.dir(x => x + 1); //anonymous()
// console.dir((x => x + 1).__proto__.__proto__); //Object

// CODING CHALLENGE #1
// Object Oriented Programming (OOP)
// Coding Challenge #1
// Your tasks:
// 1. Use a constructor function to implement a 'Car'. A car has a 'make' and a 'speed' property. The 'speed' property is the current speed of the car in  km/h

// 2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console

// 3. Implement a 'brake' method that will decrease the car's speed by 5, and  the new speed to the console

// 4. Create 2 'Car' objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them

// Test data:
// § Data car 1: 'BMW' going at 120 km/h
// § Data car 2: 'Mercedes' going at 95 km/h
// GOOD LUCK �

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed; //`${speed}km/h`; //
// };
// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is going at ${this.speed}km/h`);
// };
// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} is going at ${this.speed}km/h`);
// };
// const bmw = new Car('BMW', 120);
// const mercedes = new Car('Mercedes', 95);
// console.log(bmw, mercedes);
// bmw.accelerate();
// bmw.accelerate();
// mercedes.accelerate();
// mercedes.accelerate();
// bmw.brake();
// mercedes.brake();

// ES6 CLASSES (class is special type of functions)
//class expretion
const PersonCL1 = class {};

// class declaration
class PersonCL {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // instance method
  // Methods will be added to .prototype property

  calcAge() {
    console.log(2037 - this.birthYear);
  }
  greet() {
    console.log(`Hej ${this.fullName}`);
  }

  // Getters, setters
  get age() {
    return 2037 - this.birthYear;
  }
  // wykona się odrazu, jeśloi mamy taką właściwość zaimplementowaną wcześniej
  // Set a property that alredy exists
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }
  get fullName() {
    return this._fullName;
  }

  // Static method in Class
  static hey() {
    console.log(`Hey there!`);
    console.log(this); //to jest clasa
  }
}

const jessica = new PersonCL('Jessica Davis', 1996); //constructor jest automatycznie przechwycony

console.log(jessica);
jessica.calcAge(); //41
console.log(jessica.__proto__ === PersonCL.prototype);
// using get
console.log(jessica.age);
// PersonCL.prototype.greet = function () {
//   console.log(`Hej ${this.firstName}`);
// };
jessica.greet();

// 1. Classes are not hoisted
// 2. Classes are first-class citizes
// 3. Classes are executed in strict mode
// wywołanie statycznej metody:
PersonCL.hey();

// GETTERS AND SETTERS
//funkcje, które pobierają  i ustawiają wartość

const walter = new PersonCL('Walter White', 1965);
// walter.fullName - > 'Walter White'

// walter._fullName - > 'Walter White'

const account = {
  owner: 'jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};
console.log(account.latest);
// account.latest(50)
account.latest = 50;
console.log(account.movements);

// Objects.create

// prototyp dla dziedziczonych metod
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  // similar to constuctor
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

// nowy object, który ma dostęp do tego prototypu
const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto); //true

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();
