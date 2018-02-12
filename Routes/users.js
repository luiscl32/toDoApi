'use-strict'

import auth from '../Middleware/auth.js';
import userCtrl from '../Controllers/auth.js';

module.exports = app => {
  /*=============================================>>>>>
  = GET =
  ===============================================>>>>>*/

  app.get('/api/private',auth,(req,res)=>{
    res.status(200).send({message: 'autorizado'});
  });

  /*=============================================>>>>>
  = SignUp =
  ===============================================>>>>>*/
  app.post('/api/signUp',userCtrl.signUp);
  /*=============================================>>>>>
  = SignIn =
  ===============================================>>>>>*/
  app.post('/api/signIn',userCtrl.signIn);

}
