import bodyParser from 'body-parser';
import config from '../Config'

module.exports = app => { 
/* configurar json */
  app.set('json spaces',4);
  app.set('port', config.port);

/* configurar para que acepte json */
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended:false}));

}
