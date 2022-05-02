require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URI;
const db = mongoose.connection;


mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
db.on('open', () => {
    console.log('Mongo is Connected');
});

app.use(express.json());



app.listen(PORT,()=>{
    console.log('Server Connected', PORT);
});
