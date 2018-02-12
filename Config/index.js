module.exports = {
  db: process.env.MONGODB || 'mongodb://localhost:27017/tienda',
  port: process.env.PORT || 3000,
  SECRET_TOKEN: '32e7381065374e27d179ce22896f62bf1c3a8345'
}
