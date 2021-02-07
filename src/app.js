const express = require("express");
const app = express();
const path = require("path");
const handlebars = require("express-handlebars");
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

// app.use(express.json()); // allows us to use the json in the requests
// app.use(express.urlencoded({ extended: true }));

const readerControllers = require("./controllers/readers");
const bookControllers = require("./controllers/books");
const loanRecordControllers = require("./controllers/loanRecords");

app.engine("hbs", handlebars({extname: "hbs", defaultLayout: false, layoutsDir: "views/layouts", partialsDir: "views/partials"}));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "../views"));
app.use(express.static(path.join(__dirname, "../public")));

app.get("/", (req,res) => {
    res.render("index")
});
app.post("/createReader", readerControllers.createReader);
app.get("/listReaders", readerControllers.listReaders);
app.post("/updateReader", readerControllers.updateReader);
app.post("/deleteReaders", readerControllers.deleteReader);
app.post("/addBook", bookControllers.addBook);
app.get("/getBookList", bookControllers.getBookList);
app.post("/deleteBook", bookControllers.deleteBook);
app.post("/createLoanRecord", loanRecordControllers.addLoanRecord);
app.get("/getLoanRecords", loanRecordControllers.getMembersLoanRecord);
app.get("/getAllLoanRecords", loanRecordControllers.getAllLoanRecords);
app.post("/deleteLoanRecord", loanRecordControllers.deleteLoanRecord);


module.exports = app;
//console.log(process.env)