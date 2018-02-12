'use-strict'

import express from 'express';
import ProductCtrl from '../Controllers/product.js';



module.exports = app => {

/*=============================================>>>>>
= Metodo GET =
===============================================>>>>>*/
  app.get('/api/products',ProductCtrl.getProducts);
  app.get('/api/products/:id',ProductCtrl.getProduct);
/*=============================================>>>>>
= Metodo POST =
===============================================>>>>>*/
  app.post('/api/products',ProductCtrl.saveProduct);
/*=============================================>>>>>
= Metodo PUT =
===============================================>>>>>*/
  app.put('/api/products/:productId',ProductCtrl.updateProduct);
/*=============================================>>>>>
= Metodo DELETE =
===============================================>>>>>*/
  app.delete('/api/products/:productId',ProductCtrl.deleteProduct);

}
