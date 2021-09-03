const mongoose = require("mongoose");

const vehiculoSchema = new mongoose.Schema({
  nombre:{
    type:String,
    required:true
  },
  marca:{
    type:String,
    required:true
  },
  modelo:{
    type:Number,
    required:true
  },
  serial:{
    type:Number,
    required:true
  },
  descripcion:String,
  valor:Number
});

const Vehiculo = mongoose.model("Vehiculo",vehiculoSchema);

exports.Vehiculo = Vehiculo;
