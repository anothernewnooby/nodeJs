import express from "express";
import usuarioRoutes from './routes/usuarioRoutes.mjs'

//* creacion de app
const app = express();

//* routes
app.use('/',usuarioRoutes)


//* puerto y arranque del proyecto 
const port = 3000;

app.listen(port, () =>{
    console.log(`el server funciona en el puerto ${port}`);
});

