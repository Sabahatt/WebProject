import express, { urlencoded } from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import mongoose from "mongoose";
import cors from 'cors';
import bcrypt from 'bcrypt';
import User from './models/user';

const app = express()
const port = 4000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser())
cors()
app.use(cors({
    origin: 'localhost:3000',
    credentials: true,
}))


// Mongoose
await mongoose.connect('mongodb://localhost:27017/reddit',{useNewUrlParser:true,useUnifiedTopology:true,});
const db = mongoose.connection;
db.on('error',console.log)

app.get('/', (req, res) => {
  res.send('Hello Server!')
})

// Register
app.post('/register',(req,res)=>{
  const {email, username, password} = req.body;
  const HashedPassword = bcrypt.hashSync(password, 10);
  const user = new User({email,username,password});
  user.save().then(()=> {
    res.sendStatus(201);
  }).catch(e => {
    console.log(e);
    res.sendStatus(500);
  })
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})