import {usuario} from '../Models/usuario.js'
import bcrypt from 'bcrypt'
//Aca guardamos un usario en la base de datos
export const regusuario = (req,res) => {
const user = usuario(req.body)
user
.save()
.then((data) => res.json(data))
.catch((error) => res.json({message: error}))
}
//aca Mostramos todos los usuario de la base de datos de la colección users
export const mostrarusuarios = (req,res) => {
usuario
.find()
.then((data) => res.json(data))
.catch((error) => res.json({message: error}))

}
//mostrar un usuario especifico
export const onlyuser = (req,res) => {
    const { id }  = req.params;
    usuario
    .findById( id )
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))

}
//Aca actualizamos el usuario especifico
export const upusuario = (req,res) => {
    const { id } = req.params;
  
    //aca actualizamos el password de manera encriptada
    var { nomuser , password, correo } = req.body;
    const user = this
    let salt = bcrypt.genSaltSync(12);
    let hash = bcrypt.hashSync(password, salt);
    password = hash;



    usuario
    .updateOne({ _id: id }, { $set: { nomuser, password, correo } })
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))

}
//creamos el metodo para eliminar un usuario especifico
export const delusuario = (req, res) =>
{
    const { id } = req.params;
    usuario
    .deleteOne({_id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
} 

export default regusuario;