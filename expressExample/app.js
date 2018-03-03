const express = require('express');
const app = express();

var persona = {
    direccion : '',
    edad : 0,
    email : '@',
    id : '0',
    nombre : 'N.N',
    telefono : '0',
};

var profesor = Object.create(persona);
profesor.salario = 0;
profesor.facultad = 'none';
profesor.cursos = [];

var estudiante = Object.create(persona);
estudiante.semestre = 0;
estudiante.carrera = 'none';
estudiante.cursos = [];

var profesores = [];

var estudiantes = [];


app.post('/saveProfesor', (req, res) => {
    var profe = profesor();

});



app.get('/profesor:id', (req, res) => {

    for (var profesor in profesores) {
        if (profesor.id === id) {
            res.send(profesor.nombre);
        }
    }

    console.log("holi :v");





});



app.get('/', (req, res) => res.send('Ingenieria Web'))
app.post('/', (req, res) => res.send('Ingenieria Web'))
app.get('/felipe', (req, res) => res.send('Hola Ingenieria Web'))



app.listen(3001, () => console.log('Escuchando por el puerto 3001'));
