const request = require('supertest');
const app = require('../../app');

describe('ONG',()=>{
    it('should be able to create a new ONG', async ()=>{
        const response = await request(app)
        .post('/ongs')
        .send({
            name:"ONG",
            email:"contato@gmail.com",
            whatsapp:"4700000000",
            city:"Rio do Sul",
            uf:"SC"
        })
        console.log(response);

    })

})