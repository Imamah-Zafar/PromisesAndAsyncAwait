
const fetchURL = (url) => {
    return fetch(url)
        .then(response => response.json())
        .catch(error => {
            throw error;
        })

}

let retrieveImage = async (listOfResponses, num) => {
    response = await fetchURL(`https://jsonplaceholder.typicode.com/photos?_start=${num}&_limit=10`);
    if (response != []) {
        listOfResponses.push(response);
        return retrieveImage(listOfResponses, ++num);
    }
    else {
        console.log("endeing");
        try {
            result = await Promise.all(listOfResponses)
            return result;
        }
        catch (error) {
            console.log(error);
        }
    }

}

const display = () => {
    let promises = [];
    retrieveImage(promises, 1)
        .then(promises => {
            console.log(promises);
        })
        .catch(error => {
            console.log(error);
        })
}
display();


