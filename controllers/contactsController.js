const db = require("../models");

//methods to be applied to model 
module.exports = {
  findAll: function (req, res) {
    db.Contact
      .find(req.query)
      .sort({ lastName: 1 })
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Contact
      .findById(req.params.id)
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },
  findByCategory: function (req, res) {
    db.Contact
      .find({ lastName: req.params.category })
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Contact
      .create(req.body)
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err))
  },
  update: function (req, res) {
    db.Contact
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Contact
      .findById({ _id: req.params.id })
      .then(data => data.remove())
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  }
};
