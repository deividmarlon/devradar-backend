const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes')

const app = express();

mongoose.connect('mongodb+srv://deividmarlon:teste123@cluster0-arqtp.mongodb.net/week10?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(cors());
app.use(express.json());
app.use(routes);

const PORT = process.env.PORT || 3333;

app.listen(PORT);

