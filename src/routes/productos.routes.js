import { Router } from "express";
import { borrarProductoPorID, crearProducto, editarProductoPorID, listarProductos, obtenerProducto, prueba } from "../controllers/productos.controllers.js";

const router = Router();

//disenio la ruta y el tipo de solicitud que recibo en esa ruta
//cuando alguien haga un GET invoques una funcion
//req, res y next (peticion, respuesta y continua con la siguiente ejecucion)
router.route('/test').get(prueba
    //(req, res) => {
    //la logica la hacemos en el controlador para no mezclar rutas con logica
    //console.log('desde el controlador de prueba');
    //envio respuesta con este msj
    //res.send('Prueba desde el controlador')
//}
)

//agregar rutas
router.route('/').post(crearProducto).get(listarProductos)

//para traer un producto voy a poner el id en la ruta
router.route('/:id').get(obtenerProducto).delete(borrarProductoPorID).put(editarProductoPorID)

export default router;