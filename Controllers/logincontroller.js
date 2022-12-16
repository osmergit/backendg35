import bcrypt from 'bcrypt';
import usuario from '../models/usuario.js';
import {generateToken} from '../configs/jwtfunciones.js'
import dotenv from "dotenv";
dotenv.config();
import jwt from 'jsonwebtoken';

export const login = async (req,res) => {
    try {
        const { correo, password } = req.body;

        let user = await usuario.findOne({ correo });
        if (!user)
            return res.status(403).json({ error: "No existe este correo" });
        const respuestaPassword = await  usuario.login(correo, password )
       // const respuestaPassword = await user.comparePassword(password);
        if (respuestaPassword){
            //aca generamos nuestro token JWT
            const token = generateToken(usuario._id);
            return res.json({ token });

            //aca configuramos el token en una cookie
            //res.cookie("token", token);
            //return res.status(200).json({message: "usuario y contraseña correcta" });
             // Generar el token JWT
       
       // generateRefreshToken(user.id, res);

   //     return res.json({ token, expiresIn });
        } else {
            return res.status(403).json({message: "usuario y contraseña incorrecta" }); 
        }
       
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Error de servidor" });
    }

}

export default login; 
