import express from 'express'
import { formularioLogin, formularioRegistro, formularioOlvidePassword } from '../controllers/usuarioController.js'

const router = express.Router()


router.get('/login', formularioLogin)
router.get('/registro', formularioRegistro)
router.get('/olvide-password', formularioOlvidePassword)

/*
router.route('/')
    .get((req, res)=>{
        res.json({msg: 'Hola mundo desde express'})
    })
    .post((req, res)=>{ 
        res.json({msg: 'Respuesta de tipo post'})
    })
*/

export default router