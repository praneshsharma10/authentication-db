import express from 'express';
import { connectToDatabase } from './database/connectionToDatabase.js';
import dotenv from "dotenv";

import authRoutes from './routes/route.js';

dotenv.config();

const app = express();

app.get('/' , (req,res) => {
    res.send('response on request !! ');

})

connectToDatabase();

app.use('/api/auth', authRoutes)

app.listen(3000, () => {
    console.log('server is running on port 3000');
}
)