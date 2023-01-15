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

console.log(iryna.__proto__); //

console.log(iryna.__proto__.__proto__); //Object.prototype(top of prototype chain)

console.log(iryna.__proto__.__proto__.__proto__); //null

console.dir(Person.prototype.constructor);

const arr = [233, 546, 32, 21, 3, 1, 1, 1]; // new Array === []
console.log(arr.__proto__); //tutaj mamy wszystkie potrzebne metody
console.log(arr.__proto__ === Array.prototype); //true

console.log(arr.__proto__.__proto__);
// Możemy stworzyć własną metode na prototype kontsruktora, która będzie dostępna dla wszystkich objektów tego konstruktora, ale zwykle to nie jest dobry pomysł
Array.prototype.unique = function () {
  return [...new Set(this)];
}; //zwróci tylko unikalne wartości
console.log(arr.unique());

const h1 = document.querySelector('h1');

console.dir(h1); //zwraca object ze wszystkimi właściwościami
console.dir(h1.__proto__); //zwraca object - HTMLHeadingElement
console.dir(h1.__proto__.__proto__); //HTMLElement
console.dir(h1.__proto__.__proto__.__proto__); //Element
console.dir(h1.__proto__.__proto__.__proto__.__proto__); //Node
console.dir(h1.__proto__.__proto__.__proto__.__proto__.__proto__); //EventTarget
console.dir(h1.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__); //Object
console.dir(
  h1.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__
); //null

console.dir(x => x + 1); //anonymous()
console.dir((x => x + 1).__proto__.__proto__); //Object
