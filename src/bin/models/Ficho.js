const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const fichoSchema = new Schema({
    codigo: String,
    fecha: String,
    valor: Number,
    id_carnet: {
        type: Schema.Types.ObjectId,
        ref: "Carnet"
    },
    id_vendedor: {
        type: Schema.Types.ObjectId,
        ref: "Vendedor"
    }
})
var Ficho = mongoose.model('Ficho', fichoSchema);

module.exports = Ficho;