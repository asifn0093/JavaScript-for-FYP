            /* Lesson 10 — Fetch API */

// English :- Fetch API is a built-in JavaScript feature used to send HTTP requests and receive data from a server/API.
// simple  :- fetch() frontend se backend/API ko request bhejta hai aur response receive karta hai.

//  2. Basic syntax => fetch("URL") => Example : fetch("https://jsonplaceholder.typicode.com/users");

//  3. Fetch + Promise => Remember: fetch() Promise return karta hai.

/*
fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    });

*/

/*

fetch()
   ↓
Promise
   ↓
Response
   ↓
response.json()
   ↓
JavaScript Data

*/

                //  4. Fetch + async/await

/* CODE 💻

const getUsers = async () => {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
    );
    const data = await response.json();
    console.log(data);
};
getUsers();

*/ 



                // Get specifie Data of the user

/* CODE 💻

const userData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const data = await response.json();
    console.log(data.name);
    console.log(data.email);   
    console.log(data.address.city);
}

userData();

*/


                //  YOur Task   

/* CODE 💻

const getUser = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const data = await response.json();
    console.log(data);
};
getUser();

*/

// GET  → API se data lena
// POST → API ko data bhejna

                //  POST Request in Fetch API

/* CODE 💻

const createUser = async () => {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: "Asif",
                email: "asif@example.com",
                program: "BSSE"
            })
        }
    );
    const data = await response.json();
    console.log(data);
};
createUser();

*/

                //  Your Task 

/* CODE 💻

const postData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users",{
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            name: "Ali",
            email: "ali@example.com",
            program: "BSCS",
            semester: 7
        })
    });
    const data = await response.json()
    console.log(data);    
}
postData();

*/

/*
GET    → data lena
POST   → new data bhejna
PUT    → existing data update karna
DELETE → data delete karna

*/

                //  PUT/PATCH + DELETE.

//  1. PUT Request : PUT is used to update an existing record.

/* CODE 💻

const updateDatat = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1", {
        method : "PUT",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify({
            name : "Ahmad Raza",
            Degree : "BBA",
            semester : "7"
        })
    });
    const data = await response.json()
    console.log(data);
}
updateDatat();

*/

//   2. PATCH Request : PATCH is also used for updating, but normally when you only want to change specific fields.

/* CODE 💻

const updatedSemester = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1",{
        method : "PATCH",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify({
            semester : 8
        }) 
    });

    const data = await response.json();
    console.log(data);
}

updatedSemester();

*/

//  3. DELETE Request : Now suppose admin wants to delete an application.

/* CODE 💻

const deleteUser = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1", {
        method : "DELETE",
    });
    console.log(response.status);
};
deleteUser();

*/

/*

                FYP Connection 
            
GET     /api/applications
POST    /api/applications
PUT     /api/applications/:id
PATCH   /api/applications/:id
DELETE  /api/applications/:id


Student
   ↓
POST /api/applications
   ↓
New Application

Admin
   ↓
PATCH /api/applications/25
   ↓
Status = Accepted

*/

                // Your task 🎯

// Write a DELETE request for:  https://jsonplaceholder.typicode.com/users/5

/* CODE 💻

const deleteTask = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/5", {
        method : "DELETE",
    });
    console.log(response.status);
}
deleteTask();

*/

                //  Lesson 12 — Error Handling in JavaScript

// 1. Error kya hota hai? : Jab program mein koi problem aaye aur code expected way mein run na ho, usay error kehte hain.

// Example : 

/*

const number = 10;
console.log(number.toUpperCase());

*/

//  toUpperCase() string ke liye hota hai, number ke liye nahi — error آئے گا

                // 2. try...catch : Error ko handle karne ke liye

//  Example :

/* CODE 💻

try { // try → ye code run karo
    const number = 10;
    console.log(number.toUpperCase()); // Risky Code
} catch (error) { // catch → agar error aaye to usay handle karo
    console.log("Something went wrong"); // Error Handle
}

*/

//  3. Error message dekhna

/*

try {
    const number = 10;
    console.log(number.toUpperCase());
} catch (error) {
    console.log(error.message); // error.message actual error ka message deta hai.
}

*/

//  OutPut =- number.toUpperCase is not a function

                //  4. finally : finally chahe error aaye ya na aaye, run hota hai.
/* CODE 💻

try {
    console.log("Try Running");
} catch (error) {
    console.log("Error");
}finally{
    console.log("Finished");
}
//  OutPut : Try Running & Finished

*/

                //  5. throw  : Hum khud bhi error generate kar sakte hain

/* CODE 💻

try {
    const age = 15;
    if (age < 18) {
        throw new Error("You are under 18!");
    }
} catch (error) {
    console.log("An error Occur", error.message);
}

*/

        //  API example

/* CODE 💻

const getUser = async () => {

    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users/1"
        );

        const data = await response.json();

        console.log(data);

    } catch (error) {

        console.log("Something went wrong:", error);

    }
};

getUser();

*/

                //  6. Real FYP Example
        // Submission successfully 

/*

const submitApplication = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                studentName: "Ali",
                program: "BSCS"
            })
        });
        if (!response.ok) {
            throw new Error("Application submission failed");
        }
        const data = await response.json();
        console.log("Application submitted successfully:", data);
    } catch (error) {
        console.log("Error:", error.message);
    }
};
submitApplication();

//  OutPut :- Application submitted successfully: { studentName: 'Ali', program: 'BSCS', id: 101 }

*/

        //  Submission Failed

/*

const failedApplication = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/invalid-endpoint", {
            method: "POST",
        });
        if (!response.ok) {
            throw new Error("Application submission failed");
        }
        console.log("Application submitted successfully");

    } catch (error) {
        console.log("Error:", error.message);
    }
};
failedApplication();

// OutPut :- Error: Application submission failed

*/

                // Process Way

/*

Request
   ↓
try
   ↓
API response
   ↓
Success → Application submitted
   ↓
Error → catch
   ↓
Error message

*/

// Error Handling: Program mein errors ko detect aur properly handle karne ka process.

/*

try: risky code run karta hai.
catch: error ko handle karta hai.
finally: har situation mein run hota hai.
throw: manually error generate karta hai.

*/

                //  Lesson 11 Practice. 🎯
            
/*

Task
Create a function called getUser that:

Uses async/await
Uses try...catch
Fetches this URL:
https://jsonplaceholder.typicode.com/users/1
Checks response.ok
If successful, prints:
User: Leanne Graham
Email: Sincere@april.biz
If an error occurs, prints:
Error: <error message>
Structure hint
const getUser = async () => {

    try {
        // fetch here

        // check response.ok

        // convert response to JSON

        // print name and email

    } catch (error) {

        // print error

    }

};

getUser();

*/

const getUser = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
        if(!response.ok){
            throw new Error("Something going Wrong!");
        }
        const data = await response.json(); 
        console.log(data.name);
        console.log(data.email);               
    } catch (error) {
        console.log("Error ", error.message);
        
    }
};
getUser();