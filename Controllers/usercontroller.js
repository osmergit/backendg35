import {usuario} from '../Models/usuario.js'

//Aca guardamos un usario en la base de datos
export const regusuario = (req,res) => {
const user = usuario(req.body)
user
.save()
.then((data) => res.json(data))
.catch((error) => res.json({message: error}))
}

export const mostrarusuarios = (req,res) => {
usuario
.find()
.then((data) => res.json(data))
.catch((error) => res.json({message: error}))

}

export const onlyuser = (req,res) => {
    const { id }  = req.params;
    usuario
    .findById( id )
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))

}

export const upusuario = (req,res) => {
    const { id } = req.params;
    const {nomuser, password, correo}= req.body
    usuario
    .updateOne({ _id: id }, { $set: { nomuser, password, correo } })
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))

}

export const delusuario = (req, res) =>
{
    const { id } = req.params;
    usuario
    .deleteOne({_id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
} 

export default regusuario;