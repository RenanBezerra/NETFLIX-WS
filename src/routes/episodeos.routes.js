const express = require('express');
const router = express.Router();
const Episodeo = require('../models/episodeo');

router.get('/temporada/:temporada', async (req, res) => {
    try {
        
        const temporada_id = req.params.temporada;
        console.log(temporada_id)
        const episodeos = await Episodeo.find({
            temporada_id,
        });
            res.json({ error: false, episodeos }); 
        
    } catch (error) {
        res.json({ error: true, message: error.message });
        
    }
})


module.exports = router;