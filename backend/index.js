import express from 'express';
import { connectToDatabase } from './database/connectionToDatabase.js';

const app = express();

app.get('/' , (req,res) => {
    res.send('response on request !! ');

})

connectToDatabase();

app.listen(3000, () => {
    console.log('server is running on port 3000');
}
)