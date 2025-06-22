fetch('./fruits.json') //path to JSON file

.then(response=>response.json()) //Parse the JSON response

.then(data=>{
    console.log(data); //Use the JSON data (JavaScript Object)
    jsonData = data;

    alert(jsonData['fruits'][3].color);

})

.catch(error=>{
    console.log('Error fetching JSON:',error);
});