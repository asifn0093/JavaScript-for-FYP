
// let userName;
// let password;

// document.getElementById("mySubmit").onclick = function () {
//     userName = document.getElementById("userName").value;
//     password = document.getElementById("myPsd").value;
//     document.getElementById("myH1").textContent = `Hello ${userName}`
//     console.log(userName);
//     console.log(password);
// }

let number;

document.getElementById("myBtn").onclick = function () {

    number = Number(document.getElementById("myNum").value);

    if (number % 2 === 0) {
        document.getElementById("result").textContent =
            `${number} is Even`;
    } else {
        document.getElementById("result").textContent =
            `${number} is Odd`;
    }
};