const { Reader } = require("../models");

//creates Reader record using request body and returns in response in JSON
const create = (req, res) => {
  Reader.create(req.body).then((reader) => res.status(201).json(reader));
};

module.exports = { create };