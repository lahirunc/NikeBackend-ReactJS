const { MongoClient } = require('mongodb')

const uri =
  'mongodb+srv://lahiru:JWcOye2nUlsTTqmG@cluster0.pquygw5.mongodb.net/?retryWrites=true&w=majority'

let client

const getDB = () => {
  if (!client) {
    client = new MongoClient(uri)
  }

  const database = client.db('test')
  const products = database.collection('products')
  const orders = database.collection('orders')

  return {
    products,
    orders,
  }
}

module.exports = getDB
