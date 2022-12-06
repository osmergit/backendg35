import express from 'express'
import router from './Routes/routes.js'
import cors from 'cors'



const app = express();
app.use(cors());
app.use(express.json());
app.use('/',router);


const PORT = 8000;
app.listen(PORT, () => {
    console.log(`El Servidor esta corriendo en http://localhost:${PORT}`)
})