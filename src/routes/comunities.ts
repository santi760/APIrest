import express from "express"

const router = express.Router()

router.get('/', (_req,res) => {
    res.send('Comunidades')

})

router.post('/', (_req,res) => {
    res.send('guardando comunidades')
    
})

export default router