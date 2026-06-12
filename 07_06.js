
// TASK 1 //
// function fetchUserFromDB(userId){
    
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (userId > 0) {
//                 resolve({
//                     id: userId,
//                     username: "admin_user"
//                 });
//             } else {
//                 reject("Invalid user ID");
//             }
//         }, 1500);
//     });
// }

// fetchUserFromDB(10)
// .then(user => console.log(user))
// .catch(error => console.log(error));

///////////////////

// TASK 2 //

// const two = new Promise((resolve, reject) => {
//     resolve(10);
// })

// two.then(value => { 
//     value *= 3;
//     return value;
// })
// .then(value => {
//     value += 20;
//     return value;
// })
// .then(value => {
//     result = `Final result: ${value}`
//     return result;
// })
// .then(result => {
//     console.log(result);
    
// })

///////////////

// TASK 3 //

// function withTimeout(promise, ms) {
//     const timeoutPromise = new Promise((_, reject) => {
//         setTimeout(() => {
//             reject("Request Timeouted!");
//         }, ms);
//     });

//     return Promise.race([promise, timeoutPromise]);
// }

// const apiCall = new Promise(resolve => {
//     setTimeout(() => {
//         resolve("Data received");
//     }, 1000);
// });

// withTimeout(apiCall, 2000)
//     .then(data => console.log(data))
//     .catch(error => console.log(error));

// const apiCalltwo = new Promise(resolve => {
//     setTimeout(() => {
//         resolve("Data received");
//     }, 3000);
// });

// withTimeout(apiCalltwo, 2000)
//     .then(data => console.log(data))
//     .catch(error => console.log(error));

//////////////////////

// TASK 4 //

// function fetchFromServerA() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => reject("Server A failed"), 1000);
//     });
// }

// function fetchFromServerB() {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve("Data from Server B"), 2000);
//     });
// }

// function fetchFromServerC() {
//     return new Promise((resolve) => {
//         setTimeout(() => resolve("Data from Server C"), 1500);
//     });
// }

// Promise.any([
//     fetchFromServerA(),
//     fetchFromServerB(),
//     fetchFromServerC()
// ])
// .then(data => {
//     console.log("Received:", data);
// })
// .catch(error => {
//     console.log("All servers failed:", error);
// });

////////////////

// TASK 5 //

// function runSequentially(tasks){
//     return tasks.reduce((promiseChain, task) => {
//         return promiseChain.then(() => task());
//     }, Promise.resolve());
// }
// const task1 = () =>
//     new Promise(resolve => {
//         console.log("Task 1");
//         resolve();

//     });

// const task2 = () =>
//     new Promise(resolve => {
//         console.log("Task 2");
//         resolve();
        
//     });

// const task3 = () =>
//     new Promise(resolve => {
//         console.log("Task 3");
//         resolve();
        
//     });

// runSequentially([task1, task2, task3]);


// TASK 6 //

// function customAll(promises) {
//     return new Promise((resolve, reject) => {
//         const results = [];
//         let completed = 0;

//         if (promises.length === 0) {
//             resolve([]);
//             return;
//         }

//         promises.forEach((promise, index) => {
//             Promise.resolve(promise)
//                 .then(value => {
//                     results[index] = value;
//                     completed++;

//                     if (completed === promises.length) {
//                         resolve(results);
//                     }
//                 })
//                 .catch(reject);
//         });
//     });
// }
// const p1 = Promise.resolve("A");
// const p2 = Promise.resolve("B");
// const p3 = Promise.resolve("C");


// customAll([p1,p2,p3]).then(results => {
//         console.log(results);
// });

/////////////////////



// TASK 7 //

// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function retryRequest(fn, retries, delay) {
//     let lastError;

//     for (let attempt = 1; attempt <= retries; attempt++) {
//         try {
//             return await fn();
//         } catch (error) {
//             lastError = error;

//             console.log(` Failed:  ${attempt}, with err: ${lastError}`);

//             if (attempt < retries) {
//                 await sleep(delay);
//             }
//         }
//     }

//     throw lastError;
// }


// let count = 0;

// async function connectToDB() {
//     count++;

//     if (count < 3) {
//         throw new Error("Database connection failed");
//     }

//     return "Connected to database";
// }

// retryRequest(connectToDB, 5, 2000)
//     .then(result => console.log(result))
//     .catch(error => console.error(error.message));


//////////////////////


// TASK 8 // 

// class DatabaseCache{
//     constructor() {
//         this.cache = {};
//     }

//     getData(key) {
//         if (this.cache[key]) {
//             console.log(`Cache hit: ${key}`);
//             return Promise.resolve(this.cache[key]);
//         }

//         console.log(`Fetching from database: ${key}`);

//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 const data = `Data for ${key}`;

//                 this.cache[key] = data;

//                 resolve(data);
//             }, 2000);
//         });
//     }


// }

// const db = new DatabaseCache();

// db.getData("user1")
//     .then(data => {
//         console.log(data);

       
//         return db.getData("user1");
//     })
//     .then(data => {
//         console.log(data);
//     });


//     /////////////////////////////


// TASK 9 //

// async function promisePool(functions, n) {
//     const results = new Array(functions.length);

//     let nextIndex = 0;

//     async function worker() {
//         while (nextIndex < functions.length) {
//             const currentIndex = nextIndex++;

//             try {
//                 results[currentIndex] =
//                     await functions[currentIndex]();
//             } catch (error) {
//                 results[currentIndex] = error;
//             }
//         }
//     }

//     const workers = [];

//     const workerCount = Math.min(n, functions.length);

//     for (let i = 0; i < workerCount; i++) {
//         workers.push(worker());
//     }

//     await Promise.all(workers);

//     return results;
// }

// const tasks = [
//     () => new Promise(res =>
//         setTimeout(() => {
//             console.log("Task 1");
//             res("Result 1");
//         }, 3000)
//     ),

//     () => new Promise(res =>
//         setTimeout(() => {
//             console.log("Task 2");
//             res("Result 2");
//         }, 1000)
//     ),

//     () => new Promise(res =>
//         setTimeout(() => {
//             console.log("Task 3");
//             res("Result 3");
//         }, 2000)
//     ),

//     () => new Promise(res =>
//         setTimeout(() => {
//             console.log("Task 4");
//             res("Result 4");
//         }, 1500)
//     ),

//     () => new Promise(res =>
//         setTimeout(() => {
//             console.log("Task 5");
//             res("Result 5");
//         }, 500)
//     )
// ];

// promisePool(tasks, 2)
//     .then(results => console.log(results));

/////////////////////////


// Ի՞նչ կտպի հետևյալ կոդի գործարկման արդյունքում։
//Խնիդր 1

// Start
// Inside Promise Executor
// End
// Resolved Value

//Խնդիր 2

// A 
// D 
// C 
// B 

//Խնդիր 3

// Success: First Success


//Խնդիր 4

// 2
// 4
// undefined
// 10

//Խնդիր 5

// Hello Node.js
// Step 2: undefined
// Step 4: Next

//Խնդիր 6

// Caught: Failed at Step 1
// Step 3: Recovered


//Խնդիր 7

// Main Start
// Main End
// Microtask 1
// Microtask 2
// Nested Microtask

//Խնդիր 8

// Handler 1: Data
// Handler 2: Data

//Խնդիր 9

// Global Start
// Inside Async Function
// Global End
// Await Result
// Async End

//Խնդիր 10

// 1
// 6
// 3
// 5
// 2
// 4
