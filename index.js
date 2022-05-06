const express = require('express');
const app = express();

app.get('/', (req,res) => {
    // regra de negocio
    res.json({ mensagem : 'Rota Funcionando'});
});

app.listen(3000, () => {
    console.log('Meu servidor está funcionando')
})