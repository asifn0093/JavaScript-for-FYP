                /* Practice Section of Modules */

// Task 1 — Named Export

import {add} from "./math.js"
console.log(` The result of Export Add function is : ${add(10 , 20)}`);

// Task 2 — Two Named Exports

import {multiply} from "./math.js"
console.log(`The result of Multiply Numbers is ${(multiply(5, 4))}`);

import {sub} from "./math.js"
console.log(`The result of substruction funtion is : ${sub(20, 8)}`);

// Task 3 ⭐ — Default Export

import student from "./student.js"
console.log(`Student ${student.name} is enrolled in ${student.program}`);
