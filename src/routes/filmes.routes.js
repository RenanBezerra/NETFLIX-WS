const express = require('express');
const { PromiseProvider } = require('mongoose');
const router = express.Router();
const _ = require('underscore');
const Filme = require('../models/filme')
const Temporada = require('../models/temporada');

//recuperar tela home
router.get('/home', async (req, res) =>{
    try {
        //recupera todos filmes
        let filmes = await Filme.find({});
        let finalFilmes = [];
        //recuperando temporadas
        for (let filme of filmes){
            const temporadas = await Temporada.find({
                filme_id: filme._id
            });
            const novoFilme ={ ...filme._doc, temporadas};
            finalFilmes.push(novoFilme);
        }
        //misturar resultados aleatoriamente 
        finalFilmes = _.shuffle(finalFilmes);

        //filme principal
        const principal = finalFilmes[0];

        //separar em secoes
        const secoes = _.chunk(finalFilmes, 5);

        res.json({ error: false,  principal, secoes});
        
        
    } catch (error) {
        res.json({ error: true, message: error.message});
        
    }
})

router.get('/', async (req,res) => {
    // RECUPERAR TODOS REGISTROS
    try {
        const filmes = await Filme.find({});
        res.json({ error: false, filmes });
    } catch (error) {
        res.json({ error: true, message: error.message});
        
    }
});

router.get('/:id', async (req,res) => {
    // PEGAR SOMENTE O REGISTRO COM ID : 
    try {
        const id = req.params.id; 
        const filmes = await Filme.findById(id);
        res.json({ error: false, filmes });
    } catch (error) {
        res.json({ error: true, message: error.message});
        
    }
});

router.post('/', async (req,res) => {
    // CRIAR UM REGISTRO 
    try {
        const body = req.body;
        const response = await new Filme(body).save();
        res.json({ error: false, body: response });
        
    } catch (error) {
        res.json({ error: true, message: error.message  });
        
    }

});

router.put('/:id', async (req,res) => {
    // ATUALIZAR O REGISTRO COM ID : 
    try {
        const id = req.params.id; 
        const novoFilmes = req.body
        const filme = await Filme.findByIdAndUpdate(id, novoFilmes);

        res.json({ error: false, filme });
    } catch (error) {
        res.json({ error: true, message: error.message});
        
    }
});

router.delete('/:id', async (req,res) => {
    // DELETAR O REGISTRO COM ID : 
    try {
        const id = req.params.id; 
        const filme = await Filme.findByIdAndDelete(id);

        res.json({ error: false });
    } catch (error) {
        res.json({ error: true, message: error.message});
        
    }
});

module.exports = router;