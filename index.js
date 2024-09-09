import express from "express";
import pg from "pg";
import bodyParser from "body-parser";
const port = 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("views"));

let contactObj = [];

let i = 0;
const y = new Date();
app.get("/", (req, res) => {
  res.render("home.ejs", {
    year: y.getFullYear(),
  });
});

app.get("/about", (req, res) => {
  res.render("about.ejs", {
    year: y.getFullYear(),
  });
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs", {
    year: y.getFullYear(),
  });
});

app.post("/submit-contact", (req, res) => {
  const name = req.body["name"];
  const email = req.body["email"];
  const message = req.body["message"];

  let obj = {
    name: name,
    email: email,
    message: message,
  };

  contactObj.push(obj);

  console.log(contactObj);
});

app.listen(port, (req, res) => {
  console.log(`Listening on port ${port}`);
});
