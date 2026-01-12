import mongoose, {Schema} from "mongoose";

const productoSchema = new Schema({
    nombreProducto: {
        type: String,
        minLength: 2,
        maxLength: 100,
        required: true,
        unique: true,
    },
    precio: {
        type: Number,
        required: true,
        min: 100,
        max: 1000000,
    },
    categoria: {
        type: String,
        required: true,
        enum: [ "Acompañamientos",
      "Bebidas",
      "Ensaladas",
      "Hamburguesas",
      "Postres",
      "Pizzas",
      "Sándwiches y Wraps",
      "Veggie/Veganas",
    ],
    },
     descripcion_breve:{
    type: String,
    required: true,
    minLength: 5,
    maxLength: 250
  },
  descripcion_amplia:{
    type: String,
    required: true,
    minLength: 10,
    maxLength: 500
  },
  imagen: {
    type: String,
    required: true,
    //mongoose nos dice que podemos agregar una propiedad validate y dentro le pasamos una funcion. valor, value, url representa el dato que yo voy a ingresar. tenemos test que nos devuelve un valor booleano para ver si es correcto o no el dato ingresado
    validate: {
      validator: (valor)=> {
        return /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?(\.(jpg|jpeg|png|webp))$/.test(valor)
      }
    }
  }
},
{
  //que nos permite ver fecha de creacion y de actualizacion. nos adiciona dos propiedad. 
  timestamps: true
});

//termino de modelar mi esquema tengo que disenar el modelo. Porque ese modelo me va a ayudar a crear, borrar, editar el producto. Va con mayuscula. 

//moongose creame un modelo que se va a llamar producto, que va a ser el nombre de la coleccion, y moongose le agrega una 's'. usamos minuscula

const Producto = mongoose.model('producto', productoSchema);

export default Producto;

//NOS CAMBIAMOS DE RAMA => CRUDPRODUCTO (CREAR, LISTAR, ACTUALIZAR Y ELIMINAR) RAMA SEGUN LO QUE SE HAGA
//1 CONECTARNOS A LA BD
//2 CREACION DE PRODUCTO, NODELAR EL PRODUCTO
//3 LOGICA DE CREAR EL PRODUCTO EN LA BD(CONTROLLER) CRUD

//AGREGAR LA RUTA DEL POST