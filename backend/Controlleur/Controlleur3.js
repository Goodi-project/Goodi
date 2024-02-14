const {Cart , Produits} = require('../database/index')

exports.addto = function (req, res) {
    Cart.create(req.body)
      .then(() => {
        res.json("added");
      })
      .catch((err) => {
        res.send(err);
      });
  };
  exports.getAllproduct = function (req, res) {
    console.log("user",req.params.idu);
    console.log("product",req.params.idp);
  Cart.findAll({
      where: {
        user_idu: req.params.idu,
        // Produits_id: req.params.idp,
      },
      include: [{ model: Produits }],
    })
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.send(err);
      });
  };
  
  
  exports.remove = function (req, res) {
    console.log(req.params.id);
  Cart.destroy({where:{ id: req.params.id }})
    .then((result) => {
      res.send("deleted");
    })
    .catch((err) => {
      res.send(err);
    });
};








