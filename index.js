var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")

const app = express()

var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.json())
app.use(express.static("public"))
app.use(bodyParser.urlencoded({
    extended:true
}))
mongoose.connect('mongodb+srv://muiruricynthiaaa:Y9Wh0wgDWJVRMr7g@tfc.ifktyna.mongodb.net/AI_in_TF')
var db=mongoose.connection

db.on('error', ()=> console.log("Error in connecting to database"))
db.once('open', ()=>console.log("Connected to db"))

app.post('/signup', (req, res) => {
    const { name, email, phoneNumber, gender, password } = req.body;
  
    db.collection('users').findOne({ email }, (err, user) => {
      if (err) throw err;
  
      if (user) {
        return res.status(409).send('User already exists');
      }
  
      const data = {
        name,
        email,
        phoneNumber,
        gender,
        password
      };
  
      db.collection('users').insertOne(data, (err, result) => {
        if (err) throw err;
        console.log('Record inserted successfully');
        res.redirect('/login');
      });
    });
  });

  app.post('/login', (req, res) => {
    const { email, password } = req.body;
  
    db.collection('users').findOne({ email }, (err, user) => {
      if (err) throw err;
  
      if (!user) {
        return res.status(401).send('Invalid email or password');
      }
  
      if (user.password !== password) {
        return res.status(401).send('Invalid email or password');
      }
  
      res.render('script'); 
    });
  });

  app.get("/", (req, res) => {
    res.render("index");
});

app.get("/signup", (req,res) => {
    res.render("signup");
});
app.get("/login", (req,res) => {
    res.render("login");
});
app.get("/script", (req,res) => {
    res.render("script");
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });

console.log("Listening on port 3000"); 