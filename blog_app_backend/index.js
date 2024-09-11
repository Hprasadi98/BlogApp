const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const customerModel = require("./models/Customer")

const app = express();
app.use(express.json())
app.use(cors())

mongoose.connect('mongodb://localhost/blogDB')

app.post('/register', (req, res) =>{
    customerModel.create(req.body)
    .then(Customers => React.json(Customers))
    .catch(err => res.json(err))
})

app.listen(3000, ()=>{
    console.log('Server running on port 3000')
})