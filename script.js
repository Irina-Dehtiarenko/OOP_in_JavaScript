'use strict';

// construction function(not array function)

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

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to ptototype
// 4. function autometicaly return{}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);

console.log(matilda, jack);

const jay = 'Jay';
console.log(iryna instanceof Person); //true
console.log(jay instanceof Person); //false

// Prototypes
console.log(Person.prototype); //tutaj już istnieje metoda calcAge()

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

iryna.calcAge(); //zwraca wiec
matilda.calcAge();
console.log(iryna.__proto__); // - to jest prototyp obiektu, to samo co właściwość prototypu funkcji konstruktora
//{calcAge: ƒ, constructor: ƒ}
// calcAge: ƒ ()
// constructor: ƒ (firstName, birthYear)
// [[Prototype]]: Object
console.log(iryna.__proto__ === Person.prototype); //true
console.log(Person.prototype.isPrototypeOf(iryna)); //true

Person.prototype.species = 'Homo Sapiens';
console.log(iryna, matilda.species);

console.log(iryna.hasOwnProperty('firstName')); ///true

console.log(iryna.hasOwnProperty('species')); //false - ponieważ nie jest bezpośrednią właściwością, tylko właściwością prototypu
