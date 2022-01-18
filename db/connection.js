const monk = require("monk");
require('dotenv').config();

const connectionString = process.env.API_KEY;
const db = monk(connectionString);
db.then(() =>{
  console.log("connection to mongoAtlas is a success");
}).catch((e)=>{
  console.error("Error ! at the connection.js - ",e);
});

module.exports = db;



//For my own memory using the heroku cli
//git push heroku master
