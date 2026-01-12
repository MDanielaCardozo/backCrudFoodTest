import mongoose from "mongoose";

//cuando puede fallar usamos try catch
try {
    //usamos metodo connect
    //node lee variables de entorno con process.env 
    //con promesas utilizamos el then(luego de)
    mongoose.connect(process.env.MONGODB).then(()=>{

        console.info('BD conectada correctamente')
    })
} catch (error) {
    //objeto que contiene msj de error que es lo que fallo
    console.error(error)
}

//exportamos para utilizarlo en config
export default mongoose