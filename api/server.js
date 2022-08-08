import express, { urlencoded } from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import mongoose from "mongoose";
import cors from 'cors';

const app = express()
const port = 4000

// app.use(bodyParser,urlencoded({extended:true}));
// app.use(cookieParser())
// cors()
// app.use(cors({
//     origin: 'localhost:3000',
//     credentials: true,
// }))


app.get('/', (req, res) => {
  res.send('Hello Server!')
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})