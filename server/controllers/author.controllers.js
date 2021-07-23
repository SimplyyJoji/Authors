const Author = require("../models/author.model");

//Eport an object that is full of methods
module.exports = {
  //long-form - key: value formay
  create: function (req, res) {
    console.log("create method executed")

    Author.create(req.body)
    .then((author) => {
      //Newly created DB instance
      res.json(author);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
  },
  //Shorthand key value pair, key name will be the name of the function and value will be the function. 
  getAll(req,res) {
    console.log("getAll method executed");

    Author.find()
    .then((authors) => {
      //newly created DB model instance
      res.json(authors)
    })
    .catch((err) => {
      res.status(400).json(err);
    });
  },
  getOne(req,res) {
    console.log("getOne method Executed", "url params", req.params);

    Author.findById(req.params.id)
    .then((author) => {
      res.json(author)
    })
    .catch((err) => {
      res.status(400).json(err);
    });
  },

  delete(req, res) {
    console.log("delete method executed","url params", req.params);

    Author.findByIdAndDelete(req.params.id)
      .then((author) => {
        res.json(author);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },

  update(req, res) {
    console.log("update method executed", "url params:", req.params); 

    Author.findByIdAndUpdate(req.params.id, req.body, {
      runValidators: true,
      new: true,
    })
    .then((updatedProduct) => {
      res.json(updatedProduct);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
  },
};
