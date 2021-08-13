let listOfUrl = ["https://jsonplaceholder.typicode.com/todos/1", "https://jsonplacehoder.typicode", "https://jsonplaceholder.typicode.com/todos/3", "https://jsonplaceholder.typicode.com/todos/4"]


const fetchData = async (url) => {
    try {
        const res = await fetch(url);
        const data = await res.json();
        return data
    } catch (error) {
        throw error;
    }
};


const fetchListOfUrl = async () => {
    const responses = await Promise.allSettled(
        listOfUrl.map(fetchData)
    )
    responses.forEach((resp, index) => {
        console.log(index, resp.status, resp.value);
    });
};


fetchListOfUrl();
