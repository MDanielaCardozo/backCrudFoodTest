import router from "./src/routes/index.routes.js";
import Server from "./src/server/config.js";

const server = new Server();

//el objeto server tiene un propiedad app que es instancia de express que tiene su metodo use para usar una ruta, segundo parametro el enrutador de index.routes
server.app.use('/api', router)

//con listen le deciamos que escuche un puerto
server.listen()

//me configure dos comandos en mi package json para correr nuestro proyecto y se pone a escuchar el puerto que configuramos

//start(para produccion) ejecuta el index, el index esta invocando a server asi que se ejecuta todo lo que hicimos hasta ahora 

//dev (para desarrollo) donde pusimos que chequee el archivo de la variable de entorno --watch (va a estar observando todos los cambios del index) 