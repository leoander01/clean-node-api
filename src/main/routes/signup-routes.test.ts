import request from 'supertest'
import app from '../config/app'
import { MongoHelper } from '../../infra/db/mongodb/helpers/mongo-helper'

describe('SignUp Routes', () => {
  beforeAll(async () => {
    await MongoHelper.connect('mongodb://localhost:27017/clean-node-api')
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    const accountCollection = await MongoHelper.getCollection('accounts')
    await accountCollection.deleteMany({})
  })

  test.skip('Should return an account on success', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'Leo',
        email: 'leo@mail.com',
        password: '123',
        passwordConfirmation: '123',
      })
      .expect(200)
  })
})
