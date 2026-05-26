
///task 1//
// function IdentifyType(value){

//     if(Array.isArray(value)){
//         return "array";
        
//     }else if(value == null){
//         return null
//     }else if(Number.isNaN(value)){
//         return "isNaN"
//     }else{
//         return typeof(value);
//     }
    
    
// }



// console.log(IdentifyType(2));
// console.log(IdentifyType([0,1,2]));
// console.log(IdentifyType(null));
// console.log(IdentifyType("adf"));

/////



// task 2

// function createSecretCounter(startValue) {
//     let value = startValue;

//     return {
//         increment() {
//             value++;
//         },

//         decrement() {
//             value--;
//         },

//         getValue() {
//             return value;
//         }
//     };
// }

// const counter = createSecretCounter(10);

// console.log(counter.getValue()); 

// counter.increment();
// counter.increment();

// console.log(counter.getValue()); 

// counter.decrement();

// console.log(counter.getValue()); 


// console.log(counter.value); 


//////////////

// task 3

// function Person(name) {
//     this.name = name;
// }
// Person.prototype.greet = function () {
//     console.log(`Hello, my name is ${this.name}`);
// };


// function Student(name, grade) {
//     Person.call(this, name);
//     this.grade = grade;
// }

// Student.prototype = Object.create(Person.prototype);
// Student.prototype.constructor = Student;


// Student.prototype.showGrade = function () {
//     console.log(`Grade: ${this.grade}`);
// };


// const student1 = new Student("Arman", 95);

// student1.greet();      
// student1.showGrade();


/////////////////


// task 4

// const user = {
//     name: "Arman",

//     printName() {
//         console.log(this.name);
//     }
// };
// function callPrinter(callback) {
//     callback.call(user);
// }

// // aranc call kstana undefined vorovhetev this chi hxvum objectin
// callPrinter(user.printName); 

/////////////////////////////




/// task 5


// class Device {
//     constructor(name) {
//         this.name = name;
//         this.status = false;
//     }

//     turnOn() {
//         this.status = true;
//         console.log(`${this.name} is ON`);
//     }

//     turnOff() {
//         this.status = false;
//         console.log(`${this.name} is OFF`);
//     }
// }

// class SmartLamp extends Device {
//     #brightness = 0; 

//     constructor(name, brightness = 0) {
//         super(name);
//         this.setBrightness(brightness);
//     }


//     setBrightness(value) {
//         if (value < 0 || value > 100) {
//             console.log("Brightness must be between 0 and 100");
//             return;
//         }

//         this.#brightness = value;
//     }

   
//     getBrightness() {
//         return this.#brightness;
//     }
// }


// const lamp = new SmartLamp("Bedroom Lamp", 50);
// lamp.turnOn();
// console.log(lamp.getBrightness());
// lamp.setBrightness(80);
// console.log(lamp.getBrightness()); 
// lamp.setBrightness(150);
// console.log(lamp.brightness); 


////////////////////////////////


// task 6

// function memoize(fn) {
//     const cache = {};

//     return function (...args) {
//         const key = JSON.stringify(args);

//         if (key in cache) {

//             return `from cache -> ${cache[key]}`;
//         }

//         const result = fn(...args);

//         cache[key] = result;

//         return `calculated -> ${result}`;
//     };
// }

// function slowSquare(n) {
//     return n * n;
// }

// const memoizedSquare = memoize(slowSquare);

// console.log(memoizedSquare(5)); 
// console.log(memoizedSquare(5)); 
// console.log(memoizedSquare(6)); 
// console.log(memoizedSquare(6)); 

//////////////////////////////

// task 7

// class Shape {
//     getArea() {
//         throw new Error("Method getArea() must be implemented");
//     }
// }


// class Circle extends Shape {
//     constructor(radius) {
//         super();
//         this.radius = radius;
//     }

//     getArea() {
//         return Math.PI * this.radius ** 2;
//     }
// }

// class Square extends Shape {
//     constructor(side) {
//         super();
//         this.side = side;
//     }

//     getArea() {
//         return this.side ** 2;
//     }
// }

// const circle = new Circle(5);
// const square = new Square(4);

// console.log(circle.getArea()); 
// console.log(square.getArea()); 

// const shape = new Shape();

// console.log(shape.getArea()); // error

///////////////////////////


// task 8

// class Wallet {
//     #balance = 0;
//     #transactions = [];

//     constructor(initialBalance = 0) {
//         this.#balance = initialBalance;
//     }

//     deposit(amount) {
//         if (amount <= 0) {
//             console.log("Invalid deposit amount");
//             return;
//         }

//         this.#balance += amount;

//         this.#transactions.push({
//             type: "deposit",
//             amount,
//             date: new Date()
//         });

//         console.log(`Deposited: ${amount}`);
//     }

//     withdraw(amount) {
//         if (amount <= 0) {
//             console.log("Invalid withdraw amount");
//             return;
//         }

//         if (amount > this.#balance) {
//             console.log("Insufficient balance");
//             return;
//         }

//         this.#balance -= amount;

//         this.#transactions.push({
//             type: "withdraw",
//             amount,
//             date: new Date()
//         });

//         console.log(`Withdrawn: ${amount}`);
//     }

//     getBalance() {
//         return this.#balance;
//     }

//     getTransactions() {
//         return this.#transactions;
//     }

    
//     getTotalWithdraws() {
//         return this.#transactions
//             .filter(transaction => transaction.type === "withdraw")
//             .reduce((sum, transaction) => {
//                 return sum + transaction.amount;
//             }, 0);
//     }
// }

// const wallet = new Wallet(1000);

// wallet.deposit(500);
// wallet.withdraw(200);
// wallet.withdraw(100);

// console.log("Balance:", wallet.getBalance());
// console.log("Transactions:");
// console.log(wallet.getTransactions());
// console.log("Total withdraws:");
// console.log(wallet.getTotalWithdraws());


////////////////////////////////


// task 9

function once(fn) {
    let hasBeenCalled = false;

    return function (...args) {
        
        if (hasBeenCalled) {
            return undefined;
        }

        hasBeenCalled = true;

        
        return fn.apply(this, args);
    };
}


function greet(name) {
    console.log(`Hello ${name}`);
    return "DONE";
}

const greetOnce = once(greet);
console.log(greetOnce("Arman"));
console.log(greetOnce("Karen"));
console.log(greetOnce("Ani"));

