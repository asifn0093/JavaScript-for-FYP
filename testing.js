
// Important point
// fetch() ke case mein sirf try/catch enough nahi hota for HTTP errors such as 404 or 500. Isliye hum response.ok bhi check karte hain:

const getUsers = async () => {

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        if (!response.ok) {
            throw new Error(`HTTP Error : ${response.status}`);
            
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Something Going wrong!");
    }

}
getUsers();