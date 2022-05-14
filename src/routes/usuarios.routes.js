const express = require('express');
const router = express.Router();
const Usuario = require('../models/usuario');

router.post('/login', async (req, res) => {
    try {
        
        const credenciais = req.body;
        const usuario = await Usuario.findOne(credenciais);

        if (usuario) {
            res.json({ error: false, usuario})
        } else {
            res.json({ error: true, message: 'Nenhum usuario encontrado'});
            
        }
    } catch (error) {
        res.json({ error: true, message: error.message });
        
    }
})


module.exports = router;