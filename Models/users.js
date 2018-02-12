'use-strict'

import mongoose from 'mongoose';
import bcrypt from 'bcrypt-nodejs';
import crypto from 'crypto';
const Schema = mongoose.Schema;


/* creando el schema del usuario */
const userSchema = Schema({
  email: {type: String, unique: true, lowercase: true},
  displayName: String,
  password: {type:String, required: true},
  signUpDate: {type: Date, default: Date.now()},
  lastLogin: Date
});

/* encriptando la data del usuario antes */
userSchema.pre('save', function (next){
  let user = this;
  /* si no se han hecho modificaciones */
  if(!user.isModified('password')) return next();


  /* si modifico la password , se vuelve a encriptar */
  bcrypt.genSalt(10, (err,salt) =>{
    if(err) return next(err);
    /* se encripta */
    bcrypt.hash(user.password, salt ,null ,(err,hash) =>{
      if(err) return next(err);

      user.password = hash;
      next();
    });
  });
});

/* agregarle un avatar */
userSchema.methods.gravatar = function(){
  let user = this;
/* si no tiene un avatar */
  if(!user.email) return 'https://gravatar.com/avatar/?s=2006&=retro';

  const md5 = crypto.createHash('md5').update(user.email).digest('hex');
  return `https://gravatar.com/avatar/${md5}?s=200&=retro`;
}

module.exports = mongoose.model('user',userSchema);
