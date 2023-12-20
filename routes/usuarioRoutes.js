import express from 'express'

const router = express.Router()


router.get('/login', (req, res)=>{
    res.render('auth/login', {
        autenticado: true
    })
})

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