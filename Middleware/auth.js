'use-strict'
import services from '../Services';

  function isAuth(req,res,next){
    /* no existe autenticaio */

    if(!req.headers.authorization) {
      return res.status(403).send({message: 'no tienes authorization'});
    }

    const token = req.headers.authorization.split(" ")[1];
    console.log(token);
    services.decodeToken(token)
      .then(response =>{
        res.user = response;
        next();
      })
      .catch(err =>{
        res.status(response.status);
      });
  }

module.exports = isAuth;
