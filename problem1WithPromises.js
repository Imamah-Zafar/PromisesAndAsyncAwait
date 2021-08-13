let listOfUrl = ["https://jsonplaceholder.typicode.com/todos/1",
    "https://jsonplaceholder.typicode",
    "https://jsonplaceholder.typicode.com/todos/3",
    "https://jsonplaceholder.typicode.com/todos/4"]

//url at the the second index is not a valid url. 


//takes url and fetches the content of that url
const fetchURL = (url) => {
    return fetch(url)
        .then(response => response.json())
        .catch(error => {
            console.log(error);
        })

}

//returns 
Promise.allSettled(listOfUrl.map(fetchURL))
    .then((response) => {
        response.forEach((resp, index) => {
            console.log(index, resp.status, resp.value);
        });
    }).catch((error) => {
        console.log(error);
    });
