'use-strict'

import jwt from 'jwt-simple';
import moment from 'moment';
import config from '../Config';

/*=============================================>>>>>
= CREATE TOKEN =
===============================================>>>>>*/

  function createToken (user){
    const payload = {
      sub: user._id,
      iat: moment().unix(),
      exp: moment().add(14,'days').unix(),
    }
    return jwt.encode(payload, config.SECRET_TOKEN);
  }

/*=============================================>>>>>
= DECODE TOKEN =
===============================================>>>>>*/

  function decodeToken (token){
    const decoded = new Promise((resolve,reject) =>{
      try {
        const payload = jwt.decode(token, config.SECRET_TOKEN);

        /* verificar que el token no este expirado */
        if(payload.exp < moment().unix()){
          reject({status: 401,message: 'el token ha expirado'});
        }

        /* token correcto */
        resolve(payload.sub);


      } catch (err) {
        reject({
          status: 500,
          message: 'invalid token'
        });
      }
    });
      return decoded;
  }

module.exports = {createToken,decodeToken};
