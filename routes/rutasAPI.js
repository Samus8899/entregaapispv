import express from 'express'

import {ControladorHabitacion} from '../controllers/ControladorHabitacion.js'
import {ControladorReserva} from '../controllers/ControladorReserva.js'

//EN EL ARCHIVO DE RUTAS CREO UNA VARIABLE
//ENCARGADA DE DEFINIR TODOS LOS ENDPOINTS DE MI API

//POR CADA SERVICIO QUE ODRECE MI API DEBO TENER UN ENDPOINT O RUTA
export let rutas=express.Router()

//creo un objeto de la clase ControladorHabitacion
let controlHabitacion=new ControladorHabitacion()

let controlReserva= new ControladorReserva()

//DEFINO LAS RUTAS PARA CADA SERVICIO DE MI API:
rutas.post('/api/hotel/habitaciones',controlHabitacion.agregarHabitacion)
rutas.get('/api/hotel/habitaciones',controlHabitacion.consultarHabitaciones)
rutas.get('/api/hotel/habitaciones/:id',controlHabitacion.consultarHabitacion)
rutas.put('/api/hotel/habitaciones/:id',controlHabitacion.editarHabitacion)

//RUTAS PARA SERVICIO DE RESERVAS
rutas.post('/api/hotel/reservas',controlReserva.agregarReserva)
rutas.get('/api/hotel/reservas',controlReserva.consultarReservas)
rutas.get('/api/hotel/reservas/:id',controlReserva.consultarReserva)
rutas.put('/api/hotel/reservas/:id',controlReserva.editarReserva)

