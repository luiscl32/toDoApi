'use-strict'

import mongoose from 'mongoose';
import User from '../Models/users.js';
import service from '../Services';
/*=============================================>>>>>
= signUp =
===============================================>>>>>*/

  function signUp(req,res){
    const user = new User({
      email: req.body.email,
      displayName: req.body.displayName,
      password: req.body.password
    });

    /* salvamos el user */
    user.save((err) =>{
      if(err) return res.status(500).send({message: `Ha ocurrido un error al guardar el usuario ${err}` });

       res.status(200).send({token: service.createToken(user)});
    });
  }
/*=============================================>>>>>
= signIn =
===============================================>>>>>*/

  function signIn(req,res){
    user.find({email: req.body.email}, (err,user) =>{
      if(err) return res.status(500).send({message: `Ha ocurrido un error al iniciar sesion ${err}`});
      if(!user) return res.status(404).send({message: 'Usuario no existe'});

      req.user = user;
       res.status(200).send({message: `Bienvenido ${user.displayName}`,token: service.createToken(user)});

    });
  }

module.exports = {
  signUp,
  signIn
}
