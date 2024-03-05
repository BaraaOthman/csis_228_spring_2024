const express = require("express");
require("dotenv").config();
// to use req.body to capture JSON objects.
const bodyParser = require('body-parser');
const cors = require('cors');

const port = process.env.PORT || 3001;

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(cors({origin: '*'}));

const users = require('./routes/users.routes');

// importing 
app.use('/api/users', users);





app.listen(port, ()=>{
    console.log(`my app is listening ${port}`);

})

