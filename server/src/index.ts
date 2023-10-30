import express from 'express';

import dotenv from 'dotenv';

import path from 'path';



// Configure environment variables
// This must be done at the highest level(scope) of the application
dotenv.config({path: path.resolve(__dirname, '../.env')});


console.log(process.env.PORT)
const app = express();
const PORT = process.env.PORT || 3005;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// If in production, use the built REACT bundle for better performance
// If not in production, REACT will run its own server and proxy requests (set in package.json)
if(process.env.PRODUCTION){
    app.use(express.static(path.join(__dirname, '../../client/build')));
}


// Set the root path for the file system
// Must use '*' symbol to be used with REACT routing
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/build/index.html'));
});

app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
});


// Want to see if react can build with typescript
// Want to compile server and client with typescript 

// readme on how to set up typescript with node
// readme on how to build in development and production with react and ts