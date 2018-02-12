'use-strict'

import Product from '../Models/products.js';
/*=============================================>>>>>
= GET =
===============================================>>>>>*/

function getProduct (req,res) {
  let productId = req.params.productId;
  Product.findById(productId, (err,product) =>{
    /* verificando que exista producto */
      if(err) return res.status(500).send({message: `error al obtener productos ${err}`});
      if(!product) return res.status(404).send({message: 'no existen productos'});
    /* imprimiendo producto */
      res.status(200).send({product});
  })
}

function getProducts (req,res) {
  Product.find({}, (err,product)=>{
    /* verificando que exista producto */
      if(err) return res.status(500).send({message: `error al obtener productos ${err}`});
      if(!product) return res.status(404).send({message: 'no existen productos'});
    /* imprimiendo producto */
      res.status(200).send({product});
  });
}
/*=============================================>>>>>
= POST =
===============================================>>>>>*/

function saveProduct (req,res) {
  let product = new Product();
  /* dandole valores a la db products */

  product.name      = req.body.name,
  product.picture   = req.body.picture,
  product.price     = req.body.price,
  product.category  = req.body.category,
  product.description = req.body.description

  product.save((err, productStored) => {
    if(err){
      res.status(500).send({message: `error al guardar en la base de datos ${err}`})
    }
    res.status(200).send({products: productStored});
  });
}

/*=============================================>>>>>
= PUT =
===============================================>>>>>*/

function updateProduct (req,res) {
  let productId = req.params.productId;
  let update = req.body;

  /* actualizamos el campo */
  Product.findByIdAndUpdate(productId, update, (err,productUpdate) =>{
      if(err) return res.status(500).send({message: `error al actualizar el producto ${err}`});
      /* en caso contrario actualiza */
      res.status(200).send({product: productUpdate});
  });
}


/*=============================================>>>>>
= DELETE =
===============================================>>>>>*/
function deleteProduct (req,res)  {
  let productId = req.params.productId;
  /* eliminamos el elemento */
  Product.findById(productId, (err, product) =>{
    if(err) return res.status(500).send({message: `error al eliminar el producto ${err}`});
    product.remove( err => {
            if(err) return res.status(500).send({message: `error al eliminar el producto ${err}`});
            res.status(200).send({message: 'el producto se ha eliminado con exito'});
    });
  });
}


/* export */
module.exports = {
  getProduct,
  getProducts,
  saveProduct,
  updateProduct,
  deleteProduct
}
