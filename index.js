import express from 'express';
import mongoose from "mongoose";
import cors from "cors";
import UserRoute from "./Routes/UsersRoute.js";

const app = express();
mongoose.connect('mongodb://localhost:27017/crud_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
    // useUnifieldTopology: true
})
const db = mongoose.connection;
db.on('error', (error => console.log(error)))
db.once('open', () => console.log('Database Connected..'));

app.use(cors());
app.use(express.json());
app.use(UserRoute);

app.listen(5000, ()=> console.log('Server Ready Used...'));
