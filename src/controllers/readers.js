const { Reader } = require("../models");
const { LoanRecord } = require("../models");


const createReader = (req, res) => {
    Reader.create(req.body).then((reader) => res.render("index")
    )};


const listReaders = (req, res) => {
         Reader.findAll({ raw: true }).then((rows) => {
             res.render("readers", {readers: rows});
         });
        };

const updateReader = (req, res) => {
    Reader.update(req.body, { where: { id: req.body.readerId } }).then(([numOfRowsUpdated]) => {
    res.render("index")
    });
};


    const deleteReader = (req, res) => {
    Promise.all([Reader.destroy({ where: { id: req.body.readerId } }), LoanRecord.destroy({ where: { readerId: req.body.readerId } })])
    .then(() => {
        res.render("index")
    })
}

module.exports = { createReader, listReaders, updateReader, deleteReader };