
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
