// 2. export
// Suppose we have:

// exportFile.js

export const add = (a, b) => {
    return a + b;
};

export const sub = (a, b) => {
    return a - b;
}
/* 

We're saying:
"add function ko doosri files bhi use kar sakti hain."
That's export.

*/

                /* 6. export default ⭐ */
// There is another type called default export.

const studentDetails = {
    name : "Ali",
    age : 22,
    program : "BS Software Engineering"
}

export default studentDetails;
