const dotenv = require('dotenv');

dotenv.config({
  // coloquei um espaço no fim do test de propósito
  // não estava identificando a string sem o espaço
  path: process.env.NODE_ENV === 'test ' ? '.env.test' : '.env',
});
