const express = require('express');
const { PromiseProvider } = require('mongoose');
const router = express.Router();
const Filme = require('../models/filme')


router.get('/', (req,res) => {
    // RECUPERAR TODOS REGISTROS
    res.json({ mensagem : 'RECUPERAR TODOS REGISTROS'});
});

router.get('/:id', (req,res) => {
    // PEGAR SOMENTE O REGISTRO COM ID : 
    const id = req.params.id;
    res.json({ mensagem : `PEGAR SOMENTE O REGISTRO COM ID : ${id}` });
});

router.post('/', async (req,res) => {
    // CRIAR UM REGISTRO 
    try {
        const body = req.body;
        const response = await new Filme(body).save();
        res.json({ error: false, body: response });
        
    } catch (error) {
        res.json({ error: true, message: error.message });
        
    }

});

router.put('/:id', (req,res) => {
    // ATUALIZAR O REGISTRO COM ID : 
    const id = req.params.id;
    res.json({ mensagem : `ATUALIZAR O REGISTRO COM ID : ${id}` });
});

router.delete('/:id', (req,res) => {
    // DELETAR O REGISTRO COM ID : 
    const id = req.params.id;
    res.json({ mensagem : `DELETAR O REGISTRO COM ID :  ${id}` });
});

module.exports = router;