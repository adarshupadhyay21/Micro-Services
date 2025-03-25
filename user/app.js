const express = require('express')
const app = express();
const userRoutes = require('./routes/userRoutes')
const cokkieParse = require('cookie-parser')
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
dotenv.config()
const connect = require('./db/db');
connect()


app.use(express.json);
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

app.use('/',userRoutes)

module.exports = app