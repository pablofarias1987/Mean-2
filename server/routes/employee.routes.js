// carpeta router es para poner url que dan diponibles en nuestro servidor
// este archivo es de las rutas de empleados
const express = require('express');
const router = express.Router();


const employee = require('../controllers/employee.controller');
//difine toda la funcionalidad de la aplicacion
router.get('/', employee.getEmployees);
router.post('/', employee.createEmployee);//guarda datos
router.get('/:id', employee.getEmployee);//pedir datos de un solo usuario "id"es un parametro
router.put('/:id', employee.editEmployee);//actualizar y eliminar
router.delete('/:id', employee.deleteEmployee);//eliminar

module.exports = router;