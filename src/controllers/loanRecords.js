const { LoanRecord } = require("../models");
const { Book } = require("../models");
const { Reader } = require("../models");
const Sequelize = require("sequelize");
const bookController = require("../controllers/books");

const addLoanRecord = (req, res) => {
    Promise.all([LoanRecord.create(req.body), Book.update({numCopies: Sequelize.literal('numCopies-1')}, { where: { id: req.body.bookId } })])
    .then(() => {
        res.render("index")
         })
        }
  

const getMembersLoanRecord = (req, res) => {
    const { readerId } = req.query
    LoanRecord.findAll( { where: { readerId }, raw: true }).then((rows) => {
            res.render("loanRecords", {loanRecordsList: rows});
    });
}


const getAllLoanRecords = (req, res) => {
    Promise.all([LoanRecord.findAll({ raw: true }), Book.findAll({ raw: true }), Reader.findAll({ raw: true })])
    .then((data) => {
        res.render("loanRecords", {
            loanRecordsList: data[0], 
            bookList: data[1],
            readerList: data[2],
         })
    })
}
    
const deleteLoanRecord = (req, res) => {
    Promise.all([LoanRecord.destroy({ where: { id: req.body.id } }), Book.update({numCopies: Sequelize.literal('numCopies+1')}, { where: { id: req.body.bookId } })])
    .then(() => {
        res.render("index")   
  });
  };

 

module.exports = { addLoanRecord, getMembersLoanRecord, getAllLoanRecords, deleteLoanRecord }