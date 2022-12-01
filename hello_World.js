//Import the Express framework 
const express = require('express');
//Instantiate the Express app 
const app = express();
// set our port 
const port = 7000;
// We create a simple GET endpoint right beneath the boilerplate
// When a user hits the endpoint with a GET request, 
// the messaage "Hello World, from Express" will be returned 
// We'd like to set it to be on the home page, so the URL for the endpoint is /:
app.get('/', (req,res) =>{
    res.send('Hello World, from express');
});
// at this point, let's start our cleints
app.listen(port, () => console.log(`Hello world, from Express ${port} !`));