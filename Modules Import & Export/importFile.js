// 3. import

// Now another file:
// importFile.js

import {add, sub} from "./exportFile.js";

console.log(` The answer of Sum is ${add(10, 20)} & The answer of Substruction is ${sub(20, 5)} `);

// Output: 30

/*

What's happening?
math.js
   │
   │ export
   ↓
  add
   │
   │ import
   ↓
app.js

*/

import studentDetails from "./exportFile.js"
console.log(`Student ${studentDetails.name} is enrolled in ${studentDetails.program} an ${studentDetails.age} old person`);

                /* 7. You can rename a named import */
/* 

Suppose:
exportfile.js
export const add = (a, b) => a + b;

*/

// You can import it as:

import { add as addition } from "./exportFile.js";
console.log(` The result of Renamed import is : ${addition(5, 10)}`);

// Same concept as the destructuring renaming you learned earlier:

const { department: degree } = student;