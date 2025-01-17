// const app = require("./app")
// const connectDatabase = require("./db/Database");


// //Handling uncaught Exception when setting up backend server
// process.on("uncaughtException", (err)=>{
//     console.error(`Error: ${err.message}`);
//     console.log('shutting down the server for handling uncaught exception');
// });


// //config
// if(process.env.NODE_ENV !== "PRODUCTION"){
//     require("dotenv").config({path:"./config/.env"});
// };




// connectDatabase();


// //create server
// const server = app.listen(process.env.PORT, ()=>{
//     console.log(`server is running on http://localhost:${process.env.PORT}`);
// });


// //Handling unhandled promise rejection
// process.on("uncaughtException", (err)=>{
//     console.error(`Unhandled Rejection: ${err.message}`);
//     console.log("shutting down the server due to unhandled rejection");
//     server.close(()=>{
//         process.exit(1); //exit with failure code
//     })
// })

require("dotenv").config();

const connectDatabase = require('./db/Database.js')
const app = require("./app.js")
const PORT = process.env.PORT;

// Connecting to the database
const server = app.listen(PORT,async()=>{
  connectDatabase();
  console.log(`The server is running on Port:${PORT} URL: http://localhost:${PORT}`);
});