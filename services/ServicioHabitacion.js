import { modeloHabitacion } from "../models/modeloHabitacion.js"

export class ServicioHabitacion{

    async agregarHabitacion(habitacion){
        let nuevaHabitacion=new modeloHabitacion(habitacion)
        return await nuevaHabitacion.save()
    }
    async buscarTodasHabitaciones(){
        let habitacionEncontradas=await modeloHabitacion.find()
        return habitacionEncontradas
    }
    async buscarHabitacionPorId(id){
        let habitacionEncontrada=await modeloHabitacion.findById(id)
        return habitacionEncontrada
    }
    async editarHabitacion(id,datosNuevos){
        return await modeloHabitacion.findByIdAndUpdate(id,datosNuevos)
    }
}