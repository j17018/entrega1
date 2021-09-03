const Vehiculo = require("../../model/schemas/vehiculo.schema");
console.log(Vehiculo);
/*
async function createVehiculo(nombre1,marca1,modelo1,serial1){
  const vehiculo = new Vehiculo.Vehiculo({
    nombre:nombre1,
    marca:marca1,
    modelo:modelo1,
    serial:serial1
  });
  const res = await vehiculo.save();
  console.log(res);
}*/
async function createVehiculo(){
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
}

async function getVehiculos(){
  const vehiculos = await Vehiculo.Vehiculo.find();
  console.log(vehicles);
}

exports.createVehiculo = createVehiculo;
exports.getVehiculos = getVehiculos;
