const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors');

app.use(bodyParser.json());

const { controller } = require('./Controller')

app.use(cors());

app.get("/", (req, res) => {
  res.send('Inicio del proyecto');
})

app.get("/estudiantes", (req, res) => {
  controller.getEstudiantes(res)
})
app.get("/estudiantes/:id", (req, res) => {
  let id = req.params.id;
  controller.getEstudiante(res, id);
})
app.post("/estudiantes", (req, res) => {
  let data = req.body;
  controller.setEstudiante(res, data);
})

app.post("/estudiantes/:id/generar-carnet", (req, res) => {
  let id = req.params.id;
  let data = req.body.carnet;
  data.id_estudiante = id
  controller.setCarnet(res, data);
})
app.get("/carnets", (req, res) => {
  controller.getCarnets(res)
})
app.post("/vendedor/:idV/carnets/:idC/generar-ficho", (req, res) => {
  let { idV, idC } = req.params;
  let ficho = req.body.ficho;
  ficho.id_carnet = idC;
  ficho.id_vendedor = idV;
  controller.setFicho(res, ficho);
})

app.get('/vendedor', (req, res) => {
  controller.getVendedores(res);
})

app.post("/vendedor", (req, res) => {
  let vendedor = req.body.vendedor;
  controller.setVendedor(res, vendedor);
})

app.get("/fichos/:id", (req, res) => {
  let { id } = req.params;
  controller.getFicho(res, id);
})

exports.app = app;