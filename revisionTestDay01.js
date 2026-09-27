            /*  Revision Test — Lessons 1–3 */ 

            //: Lesson 1: map, filter, forEach

// Q1. What will this output?

const numbers = [10, 20, 30];
const result = numbers.map(num => num * 2);
console.log(result);

// Q2. Write code using filter() to create a new array containing only numbers greater than 50:

const Numbers = [20, 60, 45, 80, 30, 90];
const highNumber = Numbers.filter(num => num > 50);
console.log(highNumber);

            /* Lesson 2: Objects + Destructuring */

// Q3. Use destructuring to extract name and city:

const student = {
    name: "Asif",
    age: 20,
    address: {
        city: "Sahiwal",
        country: "Pakistan"
    }
};
const {name , address : {city}} = student;
console.log(name);
console.log(city);

            /* Lesson 3: Spread + Rest */
// Q4. Use spread to combine these two arrays:

const frontend = ["HTML", "CSS"];
const backend = ["Node.js", "Express"];
const fullStack = [...frontend , ...backend]
console.log(fullStack);

// Q5. Use object spread to create updatedStudent where the semester changes from 6 to 7, without modifying the original object:

const studentInfo = {
    name: "Asif",
    age: 20,
    semester: 6
};
const updatedStudentInfo = {
    ...studentInfo,
    semester : 7
}
console.log(updatedStudentInfo);

// Q6. ⭐ Mixed Challenge > What will this code output?

const students = [
    { name: "Asif", age: 20 },
    { name: "Ali", age: 17 },
    { name: "Ahmed", age: 22 }
];

const output = students
    .filter(student => student.age >= 18)
    .map(student => student.name);

console.log(output);