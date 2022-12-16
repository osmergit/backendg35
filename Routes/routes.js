import express from 'express';
import {regusuario, mostrarusuarios, onlyuser, upusuario, delusuario} from '../Controllers/usercontroller.js'
import {regevento, mostrareventos, onlyevento, upevento, delevento} from '../Controllers/eventcontroller.js'
import {login} from '../Controllers/logincontroller.js'
import {db} from '../mongodb.js'
import {requireToken} from '../Midleware/autorizacion.js'

export const router = express.Router();



    //rutas para los usuarios
    //Registrar un usaurio
    router.post('/regusuario',regusuario);
    //Mostramos los usuario registrados en la base de datos
    router.get('/shuser',requireToken,mostrarusuarios);
    //Mostramos un usuario especifico de la base de datos 
    router.get('/shuser/:id', onlyuser);
    //Actualizar un usuario
    router.put('/shuser/:id', upusuario);
    //Eliminar un usuario
    router.delete('/shuser/:id',delusuario);
    router.post('/login',login);

    //rutas para los eventos
  //registra un evento
    router.post('/regevento',regevento);
    //mostrar todos los eventos deportivos
    router.get('/mostrareventos',requireToken, mostrareventos);
    //mostrar un solo evento
    router.get('/mostrareventos/:id', onlyevento);
    //Actualizar un evento deportivo
    router.put('/mostrareventos/:id', upevento);
    //eliminar un evento deportivo
    router.delete('/mostrareventos/:id', delevento);
    
    //Ejemlo clase anterior
    router.get('/',function (req,res) {
        res.send('Hola desde la raiz😁')
        })
    router.get('/user', (req,res) => {
      res.send('😎Obteniendo información de los usuarios😍')
    })
    router.post('/login2', (req,res) => {
    res.send('Loguiandome desde Login 😎')
    })
    router.put('/update',(req,res) =>{
      res.send('Actualizando los usuarios😉')
    })
    router.delete('/delete', (req, res) => {
      res.send('Eliminando un usuario😮')
    })

    export default router;
