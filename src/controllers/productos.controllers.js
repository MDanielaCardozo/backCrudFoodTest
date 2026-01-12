import Producto from "../models/producto.js";

export const prueba = (req, res) => {
    console.log('desde el controlador de prueba');
    res.send('Prueba desde el controlador')
}

//cada ruta va a tener una logica desde el controlador
export const crearProducto = async (req, res) => {
    //solo podemos enviar una respuesta
    //res.send('Aqui tenemos que crear el producto')
    //EN LA BD CREAMOS EL PRODUCTO
    //COMO VA A TARDAR FUNCION ASYNC

    try {
        //1 Verificar que llegan los datos validados
        //2 pedir al modelo Producto crear el objeto en la base de datos
        //los datos me van a llegar en el cuerpo del request(tiene un header y un body) los datos siempre viajan en el body. y en el header(tipo de datos que config en POSTMAN "key": "value")
        console.log(req);
       //console.log(req.body);

       //me creo un objeto que tiene el formato de lo que voy a guardar en la BD
       const productoNuevo = new Producto(req.body);
       //moongose tiene queries
       //me crea este produc en la BD y guarda con el metodo save()
       await productoNuevo.save()

       res.status(201).json({mensaje: "El producto fue creado exitosamente."})
        
    } catch (error) {
        //obligacion del back enviar respuesta
        console.error(error);
        //500 es error interno server
        //enviar en el cuerpo de la respuesta, un msj
        //objeto res tiene metodo send y otro metodo json()
        res.status(500).json({mensaje: 'Ocurrio un error al crear el producto'})
    }
}

//Clase hoy vemos modelo, logica y el producto creado y sus propiedades

//
export const listarProductos = async(req, res) => {
    try {
        //1 buscar la collection de productos(queries de moongose find , me trae todo)
        const productos = await Producto.find()
        //2 enviar la respuesta al front( status 200)
        //lo que esta en json() es el cuerpo de la respuesta que llega entonces en el body
        res.status(200).json(productos)
    } catch (error) {
        console.error(error);
        res.status(500).json({mensaje: 'Ocurrio un error al listar los productos'})
    }
}

export const obtenerProducto = async(req, res) => {
    try {
        //me devuelve el parametro despues de la ruta
        console.log(req.params.id);
        //moongose findByID
        const productoBuscado = await Producto.findById(req.params.id);
    if (!productoBuscado) {
        //404 not found
      return res.status(404).json({ mensaje: "No se encontro el producto" });
    }
    res.status(200).json(productoBuscado);
    } catch (error) {
        console.error(error);
        //por si no cumple ese ID con el formato que tiene mongo
        res.status(500).json({mensaje: 'Ocurrio un error al listar los productos'})
    }
}

//Clase HOY comenzamos en el borrar. Nosotros borramos desde el front por tabla por el ID
//creamos la ruta,
//Luego el editar, tambien creamos la ruta

export const borrarProductoPorID = async(req, res) => {
    //todo esto encuentra el producto 
    try {
        //me devuelve el parametro ID despues de la ruta
        console.log(req.params.id);
        //moongose findByID
        const productoBuscado = await Producto.findById(req.params.id);
        //dejamos esta logica porque no voy a borrar algo que no existe
    if (!productoBuscado) {
        //404 not found
      return res.status(404).json({ mensaje: "No se encontro el producto" });
    }
    //la logica que realmente borra
    await Producto.findByIdAndDelete(req.params.id)
    //enviamos mensaje de confirmacion del eliminar
    return res.status(200).json({mensaje:'El producto fue eliminado correctamente.'})
    
    } catch (error) {
        console.error(error);
        //por si no cumple ese ID con el formato que tiene mongo
        res.status(500).json({mensaje: 'Ocurrio un error, no se pudo eliminar el producto'})
    }
}

//Para editar tambien tenemos que configurar el header y el body de postman

export const editarProductoPorID = async(req, res) => {
    //todo esto encuentra el producto 
    try {
        //me devuelve el parametro ID despues de la ruta
        console.log(req.params.id);//borrar console.log
        //moongose findByID
        //const productoBuscado = await Producto.findById(req.params.id);
        const productoBuscado = await Producto.findByIdAndUpdate(req.params.id, req.params);
        //dejamos esta logica porque no voy a borrar algo que no existe
    if (!productoBuscado) {
        //404 not found
      return res.status(404).json({ mensaje: "No se encontro el producto" });
    }
    //la logica que realmente lo actualiza QUERIE de moongoose
    //primer parametro ID, segundo parametro el cuerpo de la solicitud que pasa por el body
    await Producto.findByIdAndUpdate(req.params.id, req.body)
    //enviamos mensaje de confirmacion del actualizar
    return res.status(200).json({mensaje:'El producto fue editado correctamente.'})
    
    } catch (error) {
        console.error(error);
        //por si no cumple ese ID con el formato que tiene mongo
        res.status(500).json({mensaje: 'Ocurrio un error, no se pudo eliminar el producto'})
    }
}

//el front y el back pueden estar en un repo pero compilando el front build en public del back
//nuestra vista el index.html
//el modelo nos dice que cumpla con esa estructura, ultima capa de validacion
//IMPORTANTE! ponerse de acuerdo con validaciones y modelos FRONT y BACK.
//.env y el _id




//MONGOATLAS nos da un espacio de memoria 512mb y seleccionamos el mas cercano

//guardamos los datos de user  mdanielacardozo y password  sRFNl4F5kh9x5CgO

//extension de VScode

//dato sensible para el usuario (grupo proyecto) .env
//cluster
//mongodb+srv://mdanielacardozo:sRFNl4F5kh9x5CgO@clusterdani.cf1p5os.mongodb.net/
//cluster y base de dato
//MONGODB=mongodb+srv://mdanielacardozo:sRFNl4F5kh9x5CgO@clusterdani.cf1p5os.mongodb.net/dbcrudfood

//configuramos la ruta nueva

//babel ya esta integrado
//nodemon ya esta integrado y con el --watch correr procesos lo tiene de forma nativa desde la version 22 para ejecutar en desarrollo

//detener la terminal cuando modificamos .env

//en la nube de mongo atlas nos creamos un cluster, espacio de memoria de 512mb que nos permite guardar datos

//postman hacemos las solicitudes y obtenemos las respuestas

//backend se apodera de un puerto para hacer realizar su ejecucion

//POST
// mi servidor tome la solicitud, vaya a la base de dato, cree el objeto, la base de datos me responda si o no. y nosotros a postman le contestemos.

//1- establecer conexion con DB
//2- crear con un modelo
//3- hacer la logica en el controlador para crear

//instalamos mongoose (nos ayuda a interactuar nuestro back y la base de datos MONGO) es exclusivamente para MONGO
//odm me arma un modelo que nos permite interactuar con la base de datos (claro para JS)




