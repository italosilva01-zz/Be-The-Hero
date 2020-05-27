const connection = require('../database/connection') 
const generateUniqueId = require('../utils/generateUniqueId');

module.exports={
    async index(request,response){
        //listing NGOs
        const ongs = await connection('ongs').select('*');

        return response.json(ongs);
    },

    async create(request,response){
        //registering NGO

    const {name,email,whatsapp,city,uf} = request.body;
    const id = generateUniqueId(); 
    
    await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
    })
    return response.json({id});
    }
}
