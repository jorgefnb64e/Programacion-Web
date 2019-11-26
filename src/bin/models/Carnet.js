const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const carnetSchema = new Schema({
    codigo_qr: String,
    id_estudiante: {
        type: Schema.Types.ObjectId,
        ref: 'Estudiante'
    }
})
var Carnet = mongoose.model('Carnet', carnetSchema);

module.exports = Carnet;