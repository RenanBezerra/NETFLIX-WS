const mongoose = require('mongoose');

const Episodeo = mongoose.model('Episodeo', {
    filme_id:{
        type: mongoose.Types.ObjectId,
        ref: 'Temporada',
    },
    titulo: String,
    descricao: String,
    numero: String,
    capa: String,    
});

module.exports = Episodeo;