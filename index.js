const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

app.use(cors());

app.use(express.json({limit: "50mb"}));
app.use(express.urlencoded({ extended:true, limit: "50mb"}));

const authRoutes = require('./src/routes/auth');
const quoteRoutes = require('./src/routes/quote');
app.use('/v1/auth', authRoutes);
app.use('/v1/quote', quoteRoutes);

app.use((error, req, res, next) => {

     console.log(error);
     const status = error.errorStatus || 500;
     const message = error.errorMessage;
     const data = error.data;

     res.status(status).json({message: message, data: data});
});

mongoose.connect("mongodb+srv://vincenthadinata:bztYTO01Lk96QA8a@cluster0.gfq8o.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
.then(() => {
     app.listen(process.env.PORT || 4000, () => console.log("Connection success"));
})
.catch( err => console.log(err));