const express = require('express');
const route = require('./routes/router.js');
const  mongoose  = require('mongoose');
const app = express();
//const bodyParser=require('body-parser')
const multer=require("multer")
const PORT=process.env.PORT||3000

app.use(express.json());

app.use(multer().any())

mongoose.connect("mongodb+srv://ritikkohli:eJ9TDANLzfmCixVu@cluster0.gd4mqlp.mongodb.net/group14Database", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"),err => console.log(err))


app.use('/', route);


app.listen(  PORT, function () {
    console.log('Express app running on port ' + PORT)
});


