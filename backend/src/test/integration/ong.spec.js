const request = require('supertest')
const app = require('../../app')
const connection = require('../../database/connection')

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback()
        await connection.migrate.latest()
    })

    afterAll(async () => {
        await connection.destroy()
    })

    it('should be able to create a new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            .send({
                name: "Tiko",
                email: "tiko@gmail.com",
                whatsapp: "4199999999",
                city: "Alm. CURIRU",
                uf: "PR"
            })
        
        expect(response.body).toHaveProperty('id')
        expect(response.body.id).toHaveLength(8)
    })
})