const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));

app.get('/', (req,res) => {
    // RECUPERAR TODOS REGISTROS
    res.json({ mensagem : 'RECUPERAR TODOS REGISTROS'});
});

app.get('/:id', (req,res) => {
    // PEGAR SOMENTE O REGISTRO COM ID : 
    const id = req.params.id;
    res.json({ mensagem : `PEGAR SOMENTE O REGISTRO COM ID : ${id}` });
});

app.post('/', (req,res) => {
    // CRIAR UM REGISTRO 
    const body = req.body;
    res.json({ body });
});

app.put('/:id', (req,res) => {
    // ATUALIZAR O REGISTRO COM ID : 
    const id = req.params.id;
    res.json({ mensagem : `ATUALIZAR O REGISTRO COM ID : ${id}` });
});

app.delete('/:id', (req,res) => {
    // DELETAR O REGISTRO COM ID : 
    const id = req.params.id;
    res.json({ mensagem : `DELETAR O REGISTRO COM ID :  ${id}` });
});

app.listen(3000, () => {
    console.log('Meu servidor está funcionando dd')
})