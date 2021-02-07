const app = require("./src/app");
const path = require("path");

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server is listening at port: ${PORT}`);
});

// app.set("views", path.join(__dirname,"views"));
// app.set("view engine", "hbs");

// app.get("/", (req,res) => {
//     res.render("index");
// });