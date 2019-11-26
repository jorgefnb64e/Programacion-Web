const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const vendedorSchema = new Schema({
    nombre_1: String,
    nombre_2: String,
    apellido_1: String,
    apellido_2: String,
    cedula: String,
    telefono: String,
    direccion: String
})
var Vendedor = mongoose.model('Vendedor', vendedorSchema);

module.exports = Vendedor;