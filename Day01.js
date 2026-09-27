//  Lesson Number 01 => Map() , forEach() and Filter

/*

const products = [
    {name: "Laptop" , price: 8000},
    {name: "Mouse" , price: 2500},
    {name: "keyboard" , price: 5000},
    {name: "Monitor" , price: 30000}
]

*/

// Task 01:

/* 

products.forEach((product) => {
    console.log(product.name);
});

*/

// Task 02:

/*

const newOne = products.map((product) => {
    return `${product.name} - ${product.price}`
})
console.log(newOne);

*/

// Task 03:

/*

const highPrice = products.filter((product) => {
    return product.price >= 10000;
})
console.log(highPrice);

*/

// Task 04:

/* 

const result = products.map((product , index) => {
    return `${index} : ${product.name}`;
})
console.log(result);

*/

// Lesson Number 02 => JavaScript Objects + Destructuring

// Object : An Object stores related information in key-value pairs

/*

const student = {
    name : "Ali",
    age : 21
};

*/

// Accessing the Objects Properties
// 1) :- Dot Notation : console.log(student.name)
// 2) :- Bracket Notation : console.log(student["name"])

                /* Change the value of an Object */ 

// Although we declare object with an Const value but it is modified later

/* 

student.age = 22;
console.log(student.age);

*/


                /* Add more Data to an object */

/*

student.city = "sahiwal";
console.log(student);

*/

                /* Delete Data to an object */

/*

delete student.age;
console.log(student);

*/

                /* Objects Inside Arrays */

/*

const students = [
    { name: "Asif", age: 20 },
    { name: "Ali", age: 17 },
    { name: "Ahmed", age: 22 }
];

*/

// Let's print the name of third student
// console.log(students[2].name);

                /* Nested Objects */

/*

const student = {
    name: "Asif",
    age: 20,

    address: {
        city: "Sahiwal",
        country: "Pakistan"
    }
};

console.log(student.address.country);

*/

                /* 8. Object Destructuring ⭐ Now we reach the important modern JavaScript feature. */

/*

const info = {
    name: "Asif",
    age: 20,
    semester: 7
};

*/

/*
const {name , semester} = info;
console.log(name);
console.log(semester);
*/

                /* Destructuring with Different Variable Name : Suppose you want the property name, but you want your variable to be called studentName. */

// const { name: studentName } = info;
// console.log(studentName);

                /* 10. Default Values : Suppose the object doesn't have city */
/*

const {name , age , city = "Sahiwal"} = info;
console.log(name);
console.log(age);
console.log(city);

*/
                /*  Solved Tasks of Lesson 02 */

/*

Task 01:
console.log(student.name)
console.log(student.age)
console.log(student.department);

Task 02:
console.log(student.address.city);

Task 03:
const {name , age , semester} = student;
console.log(name)
console.log(age)
console.log(semester)

Task 04:
const {department : degree} = student;
console.log(degree)

Task 05:
const {address: {city, country}
} = student;
console.log(city);
console.log(country);

Task 6 — Real-world challenge
const { student: {name, age} , program, status 
} = application;
console.log(name);
console.log(age);
console.log(program);
console.log(status);

*/

                    /* 🚀 Lesson 3 — Spread & Rest Operators */

// => Spread = cheezon ko spread/unpack karna.
// => Rest = remaining values collect karna.

                    /* Part 1 — Spread Operator ... */

// 1. Spread with Arrays

const fruits = ["Apple", "Mango", "Banana"];

const newFruits = [...fruits]
console.log(newFruits);

// 2. Add new values to the Array 

// At the End of Array
const newFruit = [...fruits, "Orange"]
console.log(newFruit);

// At the begning & End of Array
const newFruitBigning = ["Graphes" , ...fruits , "Orange"]
console.log(newFruitBigning);

// 3. Combines two Arrays

const Arr1 = ["Ali", "Ahmad", "Saud"]
console.log(`Array 01 : ${Arr1}`);

const Arr2 = ["Hassan", "Husain", "Shabbir"]
console.log(`Array 02 : ${Arr2}`);

const combineArr = [...Arr1, ...Arr2]
console.log(combineArr);

// 4. Spread with Objects ⭐

const info = {
    name : "Asif",
    age : 21
}
const infoCopy = {...info}
console.log(infoCopy);

// 5. Add a New Property

const updatedInfo = {
    ...info, city : "Sahiwal"
}
console.log(updatedInfo);

// 6. Update an Existing Property ⭐⭐⭐

const updatedInfoProperty = {
    ...info, city:"Lahore"
}
console.log(updatedInfoProperty);

                    /* Part 2 — Rest Operator ... */

function showNumber(first, second, ...remaining) {
    console.log(first);
    console.log(second);
    console.log(remaining);    
}
showNumber(10,20,30,40,50)

// Task 1 — Array Spread

const numbers = [10, 20, 30];
const newNumber = [...numbers, 40]
console.log(newNumber);

// Task 2 — Combine Arrays

const frontend = ["HTML", "CSS", "JavaScript"]
const backend = ["Node.js", "Express"]
const fullStack = [...frontend , ...backend]
console.log(fullStack);

// Task 3 — Object Spread

const student = {
    name: "Asif",
    age: 20,
    semester: 6
};
// Create updatedStudent using spread and change:
const updatedStudent = {
    ...student, semester : 7
}
console.log(updatedStudent);

// Task 4 — Rest ⭐

function showCaseNumbers(first, second, ...remaining){
    console.log(first);
    console.log(second);
    console.log(remaining);
}
showCaseNumbers(10, 20, 30, 40, 50)
