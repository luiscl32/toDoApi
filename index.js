import express from 'express';
import consign from 'consign';


const app = express();
/* configurando consign */
  consign()
  .include('Libs/middleware.js')
  .then('Routes')
  .include('Libs/boot.js')
  .into(app);
