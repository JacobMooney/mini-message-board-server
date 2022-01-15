const monk = require("monk");
const connectionString = "mongodb+srv://Jake123:saiiBocLnm96PHyQ@mini-message-board-db.sa3la.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const db = monk(connectionString);
db.then(() =>{
  console.log("connection to mongoAtlas is a success");
}).catch((e)=>{
  console.error("Error ! at the connection.js - ",e);
});

module.exports = db;
