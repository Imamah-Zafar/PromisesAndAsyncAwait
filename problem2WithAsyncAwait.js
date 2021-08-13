//function that takes a url and fetches the content of that url
const fetchData = async (url) => {
    try {
        const res = await fetch(url);
        const data = await res.json();
        return data
    } catch (error) {
        throw error;
    }
};

//recursive function to fetch the images,store the response in an array and then uses Promises.All to collectively retrieve the data 
let retrieveImage = async (listOfResponses, num) => {
    response = await fetchData(`https://jsonplaceholder.typicode.com/photos?_start=${num}&_limit=10`);
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


const display = async () => {
    let promises = [];
    try {
        promises = await retrieveImage(promises, 1);
        console.log(promises);

    }
    catch (error) {
        console.log(error);
    }
}
display();




//retrieveImages();