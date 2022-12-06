import express from 'express';
import {regusuario, mostrarusuarios, onlyuser, upusuario, delusuario} from '../Controllers/usercontroller.js'
import {regevento} from '../Controllers/eventcontroller.js'

export const router = express.Router();
import {db} from '../mongodb.js'


    //rutas apra los usuarios
    router.post('/reguser',regusuario);
    router.get('/shuser',mostrarusuarios);
    router.get('/shuser/:id', onlyuser);
    router.put('/upuser/:id', upusuario);
    router.delete('/delete/:id',delusuario);


    //rutas para los eventos

    router.post('/evento',regevento);
    //Ejemlo clase anterior
    router.get('/',function (req,res) {
        res.send('Hola desde la raiz😁')
        })
    router.get('/user', (req,res) => {
      res.send('😎Obteniendo información de los usuarios😍')
    })
    router.post('/login', (req,res) => {
    res.send('Loguiandome desde Login 😎')
    })
    router.put('/update',(req,res) =>{
      res.send('Actualizando los usuarios😉')
    })
    router.delete('/delete', (req, res) => {
      res.send('Eliminando un usuario😮')
    })

    export default router;
