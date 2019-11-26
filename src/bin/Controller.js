const mongoose = require('mongoose');
const Estudiantes = require('./models/Estudiantes');
const Carnet = require('./models/Carnet');
const Ficho = require('./models/Ficho');
const Vendedor = require('./models/Vendedor');

class Controller {
  constructor() {
    this.connect();
  }
  async connect() {
    try {
      await mongoose.connect(
        'mongodb+srv://milos:milos1@cluster0-htjrn.mongodb.net/milos?retryWrites=true&w=majority', {
          useNewUrlParser: true
        }
      );
      console.log('Conected to DB');
    } catch (err) {
      console.log(err);
    }
  }

  // Manejando Usuarios

  getEstudiantes(res) {
    Estudiantes.find({}, (err, estudiantes) => {
      if (err) throw err;
      res.send(estudiantes)
    })
  }
  getEstudiante(res, id) {
    Estudiantes.find({
      _id: id
    }, (err, estudiante) => {
      if (err) throw err;
      res.send(estudiante);
    });
  }

  setEstudiante(res, data) {
    Estudiantes.create(data, (err, newEstudiante) => {
      if (err) throw err;
      res.send({
        status: 200,
        nE: newEstudiante
      });
    })
  }
  setCarnet(res, data) {
    Carnet.create(data, (err, newCarnet) => {
      if (err) throw err;
      res.send({
        status: 200,
        nC: newCarnet
      });
    })
  }
  getCarnets(res) {
    Carnet.find({})
      .populate({
        path: "id_estudiante",
        select: "nombre_1 nombre_2 apellido_1 apellido_2 identificacion programa"
      })
      .exec(function (err, carnet) {
        if (err) throw err;
        res.send(carnet)
      })
  }
  setFicho(res, ficho) {
    Ficho.create(ficho, (err, newFicho) => {
      if(err) throw err;
      res.send({
        msg: "Ok",
        nF: newFicho
      })
    })
  }
  getFicho(res, id) {
    Ficho.find({_id: id})
      .populate({
        path: "id_carnet",
        select: "codigo_qr id_estudiante",
        populate: {
          path: "id_estudiante",
          select: "nombre_1 nombre_2 apellido_1 apellido_2 identificacion programa"
        }
      })
      .exec( (err, ficho) => {
        if (err) throw err;
        res.send(ficho)
      })
  }

  getVendedores(res) {
    Vendedor.find({}, (err, vendors) => {
      if (err) throw err;
      res.send(vendors);
    })
  }

  setVendedor(res,vendedor) {
    Vendedor.create(vendedor, (err, newV) => {
      if(err) throw err;
      res.send(
        {
          msg: "Vendedor creado",
          nV: newV
        }
      )
    })
  }
}

exports.controller = new Controller()