const Product = require("../models/product");

exports.getProducts = (req, res, next) => {
  Product.findAll()
    .then((products) => {
      console.log(products);
      res.status(200).json({
        message: "Fetched products succesfully",
        products: products,
      });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.createProduct = (req, res, next) => {
  const title = req.body.title;
  const description = req.body.description;
  console.log(title);

  const product = new Product({
    title: title,
    description: description,
  });

  product
    .save()
    .then((product) => {
      res.status(201).json({
        message: "Product created succesfully!",
        product: product,
      });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};
