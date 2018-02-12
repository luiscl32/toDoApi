import mongoose from 'mongoose';
import config from '../Config';

module.exports = app => {


  mongoose.connect(config.db, (err,res) =>{
    if(err){
      console.log(`no se ha conectado a la base de datos ${err}`);
    }

    app.listen(app.get('port'), ()=>{
      console.log(`listen port http://localhost:${app.get('port')}`);
    });
  })



}
