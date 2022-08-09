import express, { urlencoded } from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import mongoose from "mongoose";
import cors from 'cors';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from './models/user.js';

const secret = 'secret123';
const app = express()
const port = 4000


app.use(cookieParser())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
cors()
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}))


// Mongoose
await mongoose.connect('mongodb://localhost:27017/reddit',{useNewUrlParser:true,useUnifiedTopology:true,});
const db = mongoose.connection;
db.on('error',console.log)

app.get('/', (req, res) => {
  console.log("INDEX")
  res.send('Hello Server!')
})

// Register
app.post('/register',(req,res)=>{
  // console.log("/Register")
  const {email, username} = req.body;
  // console.log(req.body);
  const password = bcrypt.hashSync(req.body.password, 10);
  const user = new User({email,username,password});
  user.save().then( user => {
    console.log(user);
    jwt.sign({id: user._id}, secret, (err, token)=> {
      if (err) {
        console.log(err);
        res.sendStatus(500);
      }
      else {
        res.status(201).cookie('token', token).send();
        // console.log("User Created");
      }
    });
  }).catch(e => {
    console.log(e);
    res.sendStatus(500);
  })
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}....`)
})