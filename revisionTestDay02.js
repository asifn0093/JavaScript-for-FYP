// Task 1 — Template Literals ⭐ 

const name = "Asif";
const program = "BSSE";
const semester = 7;

console.log(`My name is ${name}. I am studying ${program} and I am currently in semester ${semester}.`);

// Task 2 — Modules ⭐ 
// Ans :- I satisfied about this task i do it

// Task 3 — JSON ⭐ 

const student = {
    name: "Asif",
    age: 20,
    program: "BSSE"
};
// Convert into JSON

const studentJson = JSON.stringify(student)
console.log(studentJson);
// Back Convert to the Object

const jsonToObject = JSON.parse(studentJson)
console.log(jsonToObject);

//Task 4 — Identify ⭐ 
// stringify :- Convert object into the JSON string
// parse :- Convert JSON string to JavaScript Object
// Template literals helps to use the variables values into a string in a better way
// Modules helps to use data/fumction from other file 

// Task 5 — FYP Mini Challenge ⭐ 

const application = {
    name: "Asif",
    program: "BSSE",
    status: "Pending"
};

console.log(`
    Application : ${application.name}
    Program : ${application.program}
    Status : ${application.status}    
`);

