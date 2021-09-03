const config = require("./config/config");
const db_connection = require("./model/db-connection/db-connection");
const vehiculoController = require("./controller/logic/vehiculo.controller");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const router = express.Router();
app.use(bodyParser.json());

router.get("/", function(req,res){
  res.send("Hello");
});

router.get("/vehiculos", function(req,res){
  const vehiculos = vehiculoController.getVehiculos();
  res.send(vehiculos);
});

router.post("/vehiculos",function(req,res){
  //vehiculoController.createVehiculo();
  const vehiculo = new Vehiculo.Vehiculo({
    nombre:req.body.nombre,
    marca:req.body.marca,
    modelo:req.body.modelo,
    serial:req.body.serial
  });
  try{
    const vehiculo = await vehiculo.save();
    res.json(vehiculo);
  } catch(e){
    res.json({message:e});
  }
});

app.listen(config.port, function(){
  console.log("Running");
});
