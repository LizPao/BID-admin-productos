require('dotenv').config();
const express = require('express');
const cors = require('cors') // This is new
const puerto = process.env.PUERTO;

require('./config/mongoose.config')

const app = express();
app.use(cors()) // This is new
app.use(express.json()); // This is new
app.use(express.urlencoded({ extended: true })); // This is new
require('./routes/product.routes')(app); // This is new

app.listen(puerto, () => {
    console.log("Listening at Port "+ puerto)
});
