const mongoose = require("mongoose");
const config = require("../../config/config");

mongoose.connect(config.connection)
  .then(function(){
    console.log("Connected to mongodb");
  })
  .catch( err => console.log("Error connecting to mongodb",err));
