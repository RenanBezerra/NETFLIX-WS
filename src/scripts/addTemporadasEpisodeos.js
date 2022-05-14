const database = require('../services/dataBase');

const Filme = require('../models/filme');
const Temporada = require('../models/temporada')
const Episodeo = require('../models/episodeo')


const addTemporadasEpisodeos = async () => {
    try {
        const series = await Filme.find({ tipo: 'serie'}).select('_id');
        for(let serie of series){
            console.log(`Inserindo FILME ${serie}-------`);
            const numTemporadas = Math.floor(Math.random() * 5 ) +1;
            for(let i = 1; i <= numTemporadas; i++){
                console.log(`Inserindo temporada ${i} de ${numTemporadas}`);
                const temporada = await new Temporada({
                    filme_id: serie,
                    titulo: `Temporada ${i}`
                }).save();
                
                const numEpisodeos = Math.floor(Math.random() * 5)+1;
                for(let x = 1; x <= numEpisodeos; x++){
                    console.log(`Inserindo episodeos ${x} de ${numEpisodeos}`);
                    await new Episodeo({
                        temporada: temporada._id,
                        titulo: `Episodeos ${x}`,
                        numero: x,
                        descricao:
                        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing '
                        ,capa: 'https://picsum.photos/200/300'
                    }).save();
                }
                
            }
        }
        console.log('Final do Script');
    } catch (error) {
        console.log(error.message);
    }
};

addTemporadasEpisodeos();