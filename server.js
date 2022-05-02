require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const mongoose = require('mongoose');




app.listen(PORT,()=>{
    console.log('WE OUTSIDE', PORT);
});
