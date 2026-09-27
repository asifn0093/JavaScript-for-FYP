console.log("WelCoe to the Final Day of JavaScript");

                // Lesson 12 — Mini Project in JS 

/*

Is project mein hum ab tak ke concepts ko combine karenge:

Objects
Destructuring
Spread
Array methods
JSON
Promise
async/await
Fetch/API
Error handling

*/

                // Title : 🎯 Mini Project: Student Admission API

/*
                Hum API se students ka data lenge aur sirf BSSE students display karenge.

Step 1 — API se data fetch karo

Use this API:

https://jsonplaceholder.typicode.com/users
Your task

Function banao:

const getStudents = async () => {

    // your code

};

getStudents();

Requirements:

try...catch use karo.
fetch() use karo.
response.ok check karo.
response.json() use karo.

API se milne wale 10 users mein se har user ka:

name
email
city

console karo.

Output roughly:

Name: Leanne Graham
Email: Sincere@april.biz
City: Gwenborough

Name: Ervin Howell
Email: Shanna@melissa.tv
City: Wisokyburgh
Hint

API response ek array hai, isliye:

data.forEach((user) => {
    // user.name
    // user.email
    // user.address.city
});

*/

//  Try to do by your own if not than the solution code is given below 

// Mini Project solution Code

const getStudents = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        if(!response.ok){
            throw new Error("Error Occur in getting Student's Data");
        }
        const data = await response.json();
        data.forEach((user) => {
            console.log(user.name);
            console.log(user.email);
            console.log(user.address.city);
        });
    } catch (error) {
        console.log("Error : ",error.message);
    }
};
getStudents();


// If you can do by your own tha 

/*

🎉 Stage 2 — Modern JavaScript COMPLETE
You have now covered:

map / filter / forEach ✅

Objects + Destructuring ✅

Spread + Rest ✅

Template Literals ✅

Modules ✅

JSON ✅

Callbacks ✅

Promises ✅

async / await ✅

Fetch + APIs ✅

Error Handling ✅

Mini Project ✅

*/

                //  Next major stage: Node.js 🚀

// And this is where your FYP development starts becoming much more relevant, because we'll move from browser-side JavaScript into backend development.
