                /* 🚀 Day 03 — Modern JavaScript */  

// This part is important because it's cover

/*

Callbacks
   ↓
Promises
   ↓
async / await
   ↓
fetch / APIs

*/

// Lesson 7 — Callbacks
//  A function passed into another function as an argument is called a callback function.

function greet(name,profession) {
    console.log(`Hello, ${name} `);    
}

function processUser(callback) {
    callback("Asif Nawaz");
    // callback("Web Developer")
}

processUser(greet)

// 4. Callback with a value

function calculate(a,b, callback){
    const result = a + b;
    callback(result)
}
function showResult(result){
        console.log(`Reult : ${result}`);
}
calculate(20,10,showResult)

// 5. Callback using Arrow Function

sum = (a,b,callback) => {
    const output = a + b;
    callback(output);
}
showOutput = (output) => {
    console.log(`Your numbers of sum is ${output}`);
}

sum(12,13,showOutput);

// 6. Tum already callbacks use kar chuke ho 😎
// Remember forEach()?

const numbers = [10, 20, 30];

numbers.forEach((number) => {
    console.log(number);
});

// Yahan 
(number) => {
    console.log(number);
}
// callback function hai.

// 7. Another example: setTimeout() ⭐
setTimeout(() => {
    console.log(`Hello Asif Nawaz Jutt`);
}, 2000);

//  Means : 2 seconds ke baad ye function run karo.

                /* 🎯 Practice — Day 03 Lesson 7 task 1 */
// Task 1

function greets(name) {
    console.log(`Assalam u Alikum, ${name}`);
}
processGreeting = (callback) => {
    callback("Asif")    
}
processGreeting(greets)

//  Task 02

function calculator(x, y, callback) {
    const result = x + y;
    callback(result);
}
function showResults(result) {
    console.log(`The Result is: ${result}`);
}
calculator(10, 20, showResults);

// Task 02 using arrow function

callbackWithValue = (x,y,callback) => {
    const outPut = x + y;
    callback(outPut)
}
let showOutPut = (outPut) => {
    console.log(`The Result is : ${outPut}`);
}
callbackWithValue(13,15,showOutPut);

// 🧪 Task 3 — Callback with Different Operations

function add(a, b, callback) {
    const reult = a + b;
    callback(reult)
}
function sub(a, b, callback) {
    const reult = a - b;
    callback(reult)
}
function multiply(a, b, callback) {
    const reult = a * b;
    callback(reult)
}
function showResults(resut) {
    console.log(`The result is = ${resut}`);
}
add(5,3,showResults)
sub(5,3,showResults)
multiply(5,3,showResults)

//  Maybe in advance way
let calculation = (a,b,callback) => {
    const result = callback(a,b);
    console.log(`Your result is  :: ${result}`);
}
let addition = (a, b) => { 
    return a + b;
}
let substruction = (a,b) => {
    return a - b;
}
let multiplication = (a,b) => {
    return a * b;
}
calculation(17,5,addition)
calculation(17,5,substruction)
calculation(17,5,multiplication)

//  🚀 Day 03 — Lesson 8: Promises

// 1. What is a Promise : A Promise is an object that represents a value that we will get 

const myPromise = new Promise((resolve, reject) => {

    let success = true;

    if (success) {
        resolve("Task completed!");
    } else {
        reject("Task failed!");
    }
});

myPromise
    .then((resolve) => {
        console.log(resolve);
    })
    .catch((error) => {
        console.log(reject);
    });

//  🧪 Your First Promise Task
//  Create a Promise called admissionPromise.

const admissionPromise = new Promise((resolve, reject) => {
    let feePaid = true;
    if (feePaid) {
        resolve("Application fee paid successfully.");
    } else {
        reject("Application fee not paid.");
    }
});

admissionPromise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error); 
    });

// Check does the number is Even or Odd using promise

const checkNumber =  new Promise((yes, no) => {
    let number = 30;
    if(number % 2 == 0){
        yes("The number is Even ");
    }else{
        no("The number is Odd")
    }
});
checkNumber
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });

// Check thus the person is 18+ or not

const checkStaus = new Promise((resolve , reject) => {
    let age = 20;
    if(age >= 18){
        resolve("You are capible for vote")
    }else{
        reject("Sorry! You are under 18")
    }
})
checkStaus
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
        
    });

                //   📘 Lesson 08 — Promises: Asynchronous Operations
// 2. Promise + setTimeout

const complet = new Promise((resolve , reject) => {
    setTimeout(() => {
        let task = true
        if (task) {
            resolve("Task Complted Successfully!");
        } else {
            reject("Task Completion Failed!")
        }
    }, 3000);
});

complet
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })

/*

              Promise created
                    ↓
                 Pending
                    ↓
              setTimeout()
                    ↓
            ┌───────┴───────┐
            ↓               ↓
        resolve()        reject()
            ↓               ↓
         .then()         .catch()
            ↓               ↓
         result           error

*/

//  Promise means: "I will give you the result later."
//  setTimeout() is only one way to demonstrate that delay.

          //  🧪 Your Practice Task

const adminssionApplication = new Promise((resolve , reject) => {
    setTimeout(() => {
        let success = true;
        if(success){
            resolve("Application submission Successfully!")
        }else{
            reject("Application submission failed!")
        }
    }, 4000)
});
adminssionApplication
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });

                // 📘 Day 03 — Lesson 08: Promise Chaining
// Promise Chaining : It simply means using multiple .then() one after another:

/*

        2. Simple example

Output:
🧠 The important part: return
Look here:
That return value goes to the next .then().
So:
That's the main idea of Promise chaining.

*/

/*

3. Why do we need this?

Imagine your FYP admission portal:
These are multiple asynchronous steps.
Promises allow us to handle them in sequence.

*/

//  🧪 Your Task

const addmissionResult = new Promise((resole, reject) => {
    let a = 10;
    let b = 20;
    let c = a + b == 30;
    if(c){
        resole("Your calculation is correct.")
    }else{
        reject("Maybe Error in your calculation.")
    }
})

addmissionResult
        .then((result) => {
            console.log(result);
            return "Calculation Completed! "
        })
        .then((result) => {
            console.log(result);
            
        })
        .catch((error) => {
            console.log(error);
        });

        /* 🚀 Day 03 — Lesson 09: async/await */
//  Step 1 — Promise
const admissionApplication = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Application submitted successfully!");
    }, 5000);
});

//  Step 1 — Promise
const submitApplication = async () => {
    const result = await admissionApplication;
    console.log(result);
};
//  Step 3 — Run the function
submitApplication();


            //  If your Result is false 

/*

// Step 1 — Promise 
const admissionApplication = new Promise((resolve, reject) => {
    let result = false;
    setTimeout(() => {
        if (result) {
            resolve("Application submitted successfully!");
        } else {
            reject("Application submission failed!");
        }

    }, 5000);

});

// Step 2 — async function
const submitApplication = async () => {

    try {
        const result = await admissionApplication;
        console.log(result);

    } catch (error) {
        console.log(error);
    }
};

// Step 3 — Run the function
submitApplication();

*/
