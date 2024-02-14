const {Produits} = require('../database/index')

exports.createOne = function (req, res) {
    Produits.create(req.body)
      .then(() => {
        res.json("added");
      })
      .catch((err) => {
        res.send(err);
      });
  };
  
  exports.getProduct = function (req, res) {
  Produits.findAll({where:{id:req.params.id}})
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};


  exports.getAllproduct = function (req, res) {
    Produits.findAll()
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.send(err);
      });
  };

  exports.remove = function (req, res) {
    console.log(req.params.id);
  Produits.destroy({where:{ idp: req.params.id }})
    .then((result) => {
      res.send("deleted");
    })
    .catch((err) => {
      res.send(err);
    });
};

exports.renew = function (req, res) {
    console.log(req.body);
    console.log(req.params.id);
  Produits.update(req.body,{where:{idp:req.params.id}})
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};







