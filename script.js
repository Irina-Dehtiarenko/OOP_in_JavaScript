'use strict';

// // construction function(not array function)

// const Person = function (firstName, birthYear) {
//   // Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   //   Bad practise - never created methods inside the construction function  - tworzy się za każdym razem tworzenia nowego objektu
//   //   this.calcAge = function () {
//   //     console.log(2037 - this.birthYear);
//   //   };
// };

// const iryna = new Person('Iryna', 1998); //it is an instance of person
// console.log(iryna);

// // // 1. New {} is created
// // // 2. function is called, this = {}
// // // 3. {} linked to ptototype
// // // 4. function autometicaly return{}

// const matilda = new Person('Matilda', 2017);
// const jack = new Person('Jack', 1975);

// console.log(matilda, jack);

// const jay = 'Jay';
// console.log(iryna instanceof Person); //true
// console.log(jay instanceof Person); //false

// // Static methods
// Person.hey = function () {
//   console.log(`Hey there!`);
//   console.log(this);
// };
// Person.hey();
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
// // Car.prototype.brake = function () {
// //   this.speed -= 5;
// //   console.log(`${this.make} is going at ${this.speed}km/h`);
// // };
// // const bmw = new Car('BMW', 120);
// // const mercedes = new Car('Mercedes', 95);
// // console.log(bmw, mercedes);
// // bmw.accelerate();
// // bmw.accelerate();
// // mercedes.accelerate();
// // mercedes.accelerate();
// // bmw.brake();
// // mercedes.brake();

// // ES6 CLASSES (class is special type of functions)
// //class expretion
// const PersonCL1 = class {};

// // class declaration
// class PersonCL {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }
//   // instance method
//   // Methods will be added to .prototype property

//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }
//   greet() {
//     console.log(`Hej ${this.fullName}`);
//   }

//   // Getters, setters
//   get age() {
//     return 2037 - this.birthYear;
//   }
//   // wykona się odrazu, jeśloi mamy taką właściwość zaimplementowaną wcześniej
//   // Set a property that alredy exists
//   set fullName(name) {
//     console.log(name);
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }
//   get fullName() {
//     return this._fullName;
//   }

//   // Static method in Class
//   static hey() {
//     console.log(`Hey there!`);
//     console.log(this); //to jest clasa
//   }
// }

// const jessica = new PersonCL('Jessica Davis', 1996); //constructor jest automatycznie przechwycony

// console.log(jessica);
// jessica.calcAge(); //41
// console.log(jessica.__proto__ === PersonCL.prototype);
// // using get
// console.log(jessica.age);
// // PersonCL.prototype.greet = function () {
// //   console.log(`Hej ${this.firstName}`);
// // };
// jessica.greet();

// 1. Classes are not hoisted
// 2. Classes are first-class citizes
// 3. Classes are executed in strict mode
// wywołanie statycznej metody:
// PersonCL.hey();

// GETTERS AND SETTERS
//funkcje, które pobierają  i ustawiają wartość

// const walter = new PersonCL('Walter White', 1965);
// // walter.fullName - > 'Walter White'

// // walter._fullName - > 'Walter White'

// const account = {
//   owner: 'jonas',
//   movements: [200, 530, 120, 300],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };
// console.log(account.latest);
// // account.latest(50)
// account.latest = 50;
// console.log(account.movements);

// // Objects.create

// // prototyp dla dziedziczonych metod
// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   // similar to constuctor
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// // nowy object, który ma dostęp do tego prototypu
// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = 'Steven';
// steven.birthYear = 2002;
// steven.calcAge();

// console.log(steven.__proto__ === PersonProto); //true

// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 1979);
// sarah.calcAge();

// Coding challenge #2
// Your tasks:
// 1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')
// 2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6)
// 3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6)
// 4. Create a new car and experiment with the 'accelerate' and 'brake' methods, and with the getter and setter.
// Test data:
// § Data car 1: 'Ford' going at 120 km/h
// GOOD LUCK �
///////////////////////////////////

// solution
// class CarCL {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed}km/h`);
//   }
//   brake() {
//     this.speed -= 5;
//     console.log(`${this.make} is going at ${this.speed}km/h`);
//   }

//   get speedUS() {
//     return this.speed / 1.6; //mi/h
//   }

//   /*   set fullName(name) {
//     console.log(name);
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }
//   get fullName() {
//     return this._fullName;
//   } */

//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// const ford = new CarCL('Ford', 120);
// console.log(ford.speedUS);
// ford.accelerate();
// ford.accelerate();
// ford.brake();
// console.log(ford.speedUS);

// ford.speedUS = 50;
// console.log(ford);

// const PersonIN = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// PersonIN.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// // Linking prototypes
// Student.prototype = Object.create(PersonIN.prototype);

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const mike = new Student('Mike', 2020, 'Computer Science');
// console.log(mike);
// mike.introduce();
// mike.calcAge();

// console.log(mike.__proto__);
// console.log(mike.__proto__.__proto__);
// console.log(mike.__proto__.__proto__.__proto__);

// console.log(mike instanceof Student); //true

// console.log(mike instanceof PersonIN); //true - nie powinno być
// console.log(mike instanceof Object); //true

// console.dir(Student.prototype.constructor, 'before'); // PersonIN(firstName, birthYear)

// Student.prototype.constructor = Student;

// console.dir(Student.prototype.constructor, 'after'); //Student(firstName, birthYear, course)
// console.log(mike instanceof Person);

// CHALLENGE #3
// Coding Challenge #3
// Your tasks:
// 1. Use a constructor function to implement an Electric Car (called 'EV') as a child "class" of 'Car'. Besides a make and current speed, the 'EV' also has the current battery charge in % ('charge' property)
// 2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo'
// 3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%'
// 4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! Hint: Review the definiton of polymorphism �
// Test data:
// § Data car 1: 'Tesla' going at 120 km/h, with a charge of 23%

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

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge; //%
// };

// EV.prototype = Object.create(Car.prototype);

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };

// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge -= 1; //%
//   console.log(
//     `${this.make} going at ${this.speed} with a charge of ${this.charge}`
//   );
// };

// // EV.prototype.constructor = EV;
// const tesla = new EV('Tesla', 120, 23);
// console.log(tesla);
// tesla.accelerate();
// tesla.accelerate();
// tesla.brake();
// tesla.chargeBattery(90);
// console.log(tesla);
// tesla.accelerate();

////////////////////////////////////////////
// Inheritance between classes ES6 classes:

// class PersonCL {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }
//   greet() {
//     console.log(`Hej ${this.fullName}`);
//   }
//   get age() {
//     return 2037 - this.birthYear;
//   }
//   set fullName(name) {
//     console.log(name);
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name!`);
//   }
//   get fullName() {
//     return this._fullName;
//   }

//   static hey() {
//     console.log(`Hey there!`);
//   }
// }
// // class StudentCL1 extends PersonCL {
// // without any constructor function
// // }
// // const martha1 = new StudentCL('Martha Jones', 2012)

// class StudentCL extends PersonCL {
//   constructor(fullName, birthYear, course) {
//     // Always needs to happen first
//     super(fullName, birthYear);
//     this.course = course;
//   }

//   introduce() {
//     console.log(`My name is ${this.fullName} and I study ${this.course}`);
//   }

//   calcAge() {
//     console.log(
//       `I'm ${
//         2037 - this.birthYear
//       } years old, but as a student I feel more like ${
//         2037 - this.birthYear + 10
//       }`
//     );
//   }
// }

// const martha = new StudentCL('Martha Jones', 2012, 'Computer Science');
// martha.introduce();
// martha.calcAge();

// ////////////////////////////////////////////
// Inheritance between "classes" Objact.create:

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);

// const StudentProto = Object.create(PersonProto);
// StudentProto.init = function (firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
// };

// StudentProto.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const jays = Object.create(StudentProto);
// jays.init('Jay', 2010, 'Computer Science');
// jays.introduce();
// jays.calcAge();

// ////////////////////////////////////////////
// Another class example

// ////////////////////////////////////////////
// Encapsulation
// class Account {
//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     this._pin = pin;
//     //protected property
//     this._movements = [];
//     this.local = navigator.language;

//     console.log('Thanks for opening an account ' + owner);
//   }

//   // Public interface
//   getMovements() {
//     return this._movements;
//   }
//   deposit(val) {
//     this._movements.push(val);
//   }
//   withdraw(val) {
//     this.deposit(-val);
//   }

//   _approveLoan(val) {
//     return true;
//   }
//   requestLoan(val) {
//     if (this._approveLoan(val)) {
//       this.deposit(val);
//       console.log(`Loan approved`);
//     }
//   }
// }

// const acc1 = new Account('Jonas', 'EUR', 1111);
// console.log(acc1);

// // // not a good idea
// // acc1._movements.push(250); // deposits
// // acc1._movements.push(-150); //withdraw

// // best idea:
// acc1.deposit(150);
// acc1.withdraw(80);
// acc1.requestLoan(1000);
// acc1.approveLoan(1000); //nie powinniśmy mieć dostęp do tej metody

// //Better way:
// console.log(acc1.getMovements());
// console.log(acc1);
// console.log(acc1.pin); //nie powinien być dostępny tu

// ////////////////////////////////////////////
// Encapsulation: private class fields and methods

//1. Public fields
//2. private fields
//3. Public methods
//4. private methods
// // there is also the static version

// class Account {
//   //1. Public fields (instances)
//   locale = navigator.language;

//   //2. Private fields (instances)
//   #movements = [];
//   #pin;
//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;
//     this.#pin = pin;
//     //protected property
//     // this._movements = [];
//     // this.local = navigator.language;

//     console.log('Thanks for opening an account ' + owner);
//   }
//   //3. Public methods

//   // Public interface
//   getMovements() {
//     return this.#movements;
//   }
//   deposit(val) {
//     this.#movements.push(val);
//     return this;
//   }
//   withdraw(val) {
//     this.deposit(-val);
//     return this;
//   }
//   _approveLoan(val) {
//     return true;
//   }

//   requestLoan(val) {
//     // if (this.#approveLoan(val))
//     if (this._approveLoan(val)) {
//       this.deposit(val);
//       console.log(`Loan approved`);
//     }
//     return this;
//   }

//   static helper() {
//     console.log('Helper');
//   }

//   //4. private methods
//   // #approveLoan(val) {
//   // return true;
//   // }
// }

// const acc1 = new Account('Jonas', 'EUR', 1111);
// console.log(acc1);

// // // not a good idea
// // acc1._movements.push(250); // deposits
// // acc1._movements.push(-150); //withdraw

// // best idea:
// acc1.deposit(150);
// acc1.withdraw(80);
// acc1.requestLoan(1000);
// // acc1.#approveLoan(1000);//Uncaught SyntaxError: Private field '#approveLoan' must be declared in an enclosing class (at script.js:612:5)

// console.log(acc1.getMovements()); //mamy dostęp do movements ale nie możemy tego zmienić
// console.log(acc1);
// // console.log(acc1.pin); //nie powinien być dostępny tu

// // console.log(acc1.#movements); //Uncaught SyntaxError: Private field '#movements' must be declared in an enclosing class (at script.js:615:17)
// // console.log(acc1.#pin);

// // console.log(acc1.#approveLoan(100)); //na dannym etapie widzi privatne methody jako privatne pola(fields)

// Account.helper();

// ////////////////////
// // Chaining methods

// acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
// console.log(acc1.getMovements());

/////////////////////////////////////////
// Challenge #4

// Coding Challenge #4
// Your tasks:
// 1. Re-create Challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
// 2. Make the 'charge' property private
// 3. Implement the ability to chain the 'accelerate' and 'chargeBattery'  methods of this class, and also update the 'brake' method in the 'CarCl' class. Then experiment with chaining!
// Test data:
// § Data car 1: 'Rivian' going at 120 km/h, with a charge of 23%

class CarCL {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed}km/h`);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed}km/h`);

    return this;
  }

  get speedUS() {
    return this.speed / 1.6; //mi/h
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCl extends CarCL {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge -= 1; //%
    console.log(
      `${this.make} going at ${this.speed} with a charge of ${this.#charge}%`
    );
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);

rivian.brake().accelerate().brake().chargeBattery(60).accelerate();

console.log(rivian.speedUS); //converted to mi/h
