import express from 'express';
import {regusuario, mostrarusuarios, onlyuser, upusuario, delusuario} from '../Controllers/usercontroller.js'
import {regevento, mostrareventos, onlyevento, upevento, delevento} from '../Controllers/eventcontroller.js'

export const router = express.Router();
import {db} from '../mongodb.js'


    //rutas apra los usuarios
    router.post('/reguser',regusuario);
    router.get('/shuser',mostrarusuarios);
    router.get('/shuser/:id', onlyuser);
    router.put('/upuser/:id', upusuario);
    router.delete('/delete/:id',delusuario);


    //rutas para los eventos
  //registra un evento
    router.post('/evento',regevento);
    //mostrar todos los eventos deportivos
    router.get('/mostrareventos', mostrareventos);
    //mostrar un solo evento
    router.get('/onlyevento/:id', onlyevento);
    //Actualizar un evento deportivo
    router.put('/upevento/:id', upevento);
    //eliminar un evento deportivo
    router.delete('/delevento/:id', delevento);
    
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
