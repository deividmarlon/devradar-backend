const axios = require ('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

// Controle tem no maximo 5 métodos:
// index, show, store, update, destroy.

module.exports = {
    
    async index(request, response){
        const devs = await Dev.find();

        return response.json(devs);
    },

    async store (request,response){

        const { github_username, techs, latitude, longitude } = request.body;

        let dev = await Dev.findOne({github_username}); // consulto o db com base no github_username

        if(!dev){
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);

            const { name = login , avatar_url, bio } =   apiResponse.data; // se name nao existir, por padrao recebe login
    
            const techsArray = parseStringAsArray(techs);

            const location = {
                type: 'Point',
                coordinates:[longitude,latitude],
            }
    
            const dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location,
            })
        }


        return response.json(dev);
    }

    // ------>faltam os métodos update and destroy;

}