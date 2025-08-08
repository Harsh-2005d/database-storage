
const express=require('express');
const app=express();
const passport=require('./middleware/passportConfig')
const path = require("path");
const expressLayouts = require("express-ejs-layouts");
const routes = require('./routes/authRoutes');


const cookieParser = require("cookie-parser");


app.use(passport.initialize());

app.use(express.urlencoded({ extended: true }));


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.use(expressLayouts);
app.set("layout", "layout");
app.use(cookieParser()); // ✅ must be before passport
app.use("/",routes)
app.use(express.static(path.join(__dirname, 'public')));


app.listen(3000,()=>{
    console.log("your app is running on 3000")
})