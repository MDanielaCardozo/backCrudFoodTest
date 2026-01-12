import { Router } from "express";
import productosRoutes from "./productos.routes.js";

//router(metodo) es una herramienta de express que nos permite gestionar rutas (enrutador) la declaro en miniscula para que no genere un conflicto de js al tener el mismo nombre.\
//creamos unas instancia al invocar Router y guardarlo dentro de la variable
const router = Router();
//router usa la ruta http://localhost:3000/api/productos/ para lo que yo cree en productos.routes.js
router.use('/productos', productosRoutes)

export default router;

//el index me va a servir de indice/menu de rutas(productos, usuarios, etc)

//tenemos el dominio y las rutas que me devuelven una respuesta a una determinada peticion (GET, POST, PUT O PATH Y DELETE)