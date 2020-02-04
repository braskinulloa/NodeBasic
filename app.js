/*console.log("PROCESS", process);*/

// const helpers = require("./helpers");

//Object destructuring
// const { sum } = require("./helpers");
// const total = sum(45, 88);

// //NODE MODULES
// const http = require('http');

// const server = http.createServer((req, res)=>{
//     res.end("Hello world from node js updated with nodemon")
// });

// server.listen(3000);
// // const total = helpers.sum(45, 88);

// console.log("Total: ", total);

const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.end('Hey this is express');
});