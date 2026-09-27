            /* 🚀 Lesson 04 — Template Literals */

// Template literals allow us to put variables directly inside a string.
const name = "Asif Nawaz";
const age = 21;

//  WithOut Template Literals
console.log("My name is " + name + " and i'm "  + age + " years old");
//  With Template Literals
console.log(`My name is ${name} and i'm ${age} years old`);

                /* 4. Template Literals with Objects ⭐ */
// This is where it becomes useful for your FYP.

const studentInfo = {
    fullName : "Asif Nawaz",
    program : "BS SE",
    semester : 7
}
console.log(`Student ${studentInfo.name} is enrolled in ${studentInfo.program}, semester ${studentInfo.semester}`);

// Output :- Student Asif Nawaz is enrolled in BS SE, semester 7

                /* 5. Template Literals with Destructuring */

// You can combine the previous lessons:

const {fullName,program, semester} = studentInfo;
console.log(`Student ${fullName} is enrolled in ${program}, semester ${semester} with roll # 60914 `);

                /* 6. Multi-line Strings ⭐ */
// Template literals are also useful for writing multiple lines.
        // Without template literals:

console.log("Name: Asif\nAge: 20\nProgram: BSSE");

        // Without template literals:

console.log(`
    Name: Asif
    Age: 21 
    Program: BS SE`
);        

                /* 7. FYP Example 🎓 */
// Imagine your admission system receives:
const application = {
    studentName : "Ahmad",
    age : 22,
    program : "BS Computer Science",
    status : "pending"
}

const message = `Hello ${application.studentName}, your Application for ${application.program} is currently ${application.status}`;
console.log(message);

                /* 🚀 Lesson 05 — JavaScript Modules (export & import) */

// This lesson is very important because your FYP will have many files. We don't want one giant JavaScript file containing everything.

/*  

📦 Lesson 05 — Modules
1. First understand the problem

Imagine you have one file:

app.js

And inside it you have:

Student functions
Admission functions
Login functions
API functions
Validation functions

After some time, the file can become 1000+ lines 😵.

Instead, we can separate our code:

project/
│
├── app.js
├── student.js
├── admission.js
└── login.js

Then one file can export something and another file can import it.

Roman Urdu

Simple:

Export = kisi cheez ko doosri file ke liye available karna.

Import = doosri file se woh cheez apni file mein lana.

*/    

// To understand the Overall working of Import and Export check out the files inside the Folder Modules Import & Export

                /* 8. Why Modules matter for your FYP 🎓 */

                
/*

Imagine your MERN Admission System.

Instead of:

everything.js

we could eventually organize things like:

src/
│
├── components/
│
├── pages/
│
├── services/
│   ├── auth.js
│   ├── admission.js
│   └── api.js
│
├── utils/
│   ├── validation.js
│   └── helpers.js
│
└── App.jsx

For example:

import { loginUser } from "./services/auth.js";

or:

import { validateApplication } from "./utils/validation.js";

This makes a large application much easier to manage.

*/

            /* 📦 Lesson 6 — JSON */

// 
