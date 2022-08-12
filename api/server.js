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

// Index
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
    // console.log(user);
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

// User
app.get('/user', (req,res)=>{
  // console.log("/User"); 
  const token = req.cookies.token;
  const userInfo = jwt.verify(token, secret);
  // console.log(userInfo); 
  User.findById(userInfo.id)
  .then(user => {
    res.json({username: user.username});
  })
  .catch(err => {
    console.log(err);
    res.sendStatus(500);
  })

});

// Login
app.post('/login',(req,res)=>{
  const {username, password} = req.body;
  User.findOne({username}).then(user =>
    {
      if(user&&user.username)
      {
        const passOk = bcrypt.compareSync(password, user.password);
        if(passOk)
        {
          jwt.sign({id:user._id},secret,(err,token)=>{
            res.cookie('token',token).send();
          });
        }
        else {
          res.status(422).json("Invalid");
        }
      } else {
          res.status(422).json("Invalid");
      }
    });
});

// Logout
app.post('/logout',(req,res)=>{
  // console.log("logout");
  res.cookie('token','').send();
});


app.listen(port, () => {
  console.log(`Server listening on port ${port}....`)
})