const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const EstudiantesSchema = new Schema({
  nombre_1: String,
  nombre_2: String,
  apellido_1: String,
  apellido_2: String,
  identificacion: String,
  programa: String,
  direccion: String,
  correo: String,
});

var Estudiantes = mongoose.model("Estudiante", EstudiantesSchema);

module.exports = Estudiantes;