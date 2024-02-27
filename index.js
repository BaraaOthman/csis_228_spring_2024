const express = require("express");
require("dotenv").config();
const bodyParser = require('body-parser');
const cors = require('cors');

const port = process.env.PORT || 3001;

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(cors({origin: '*'}));

const users = require('./routes/users.routes');

app.get("/", async (req, res)=>{
    const users = await query("select * from users");
    const data = {
        message: "test message",
        content: "this is the content",
        users: users,
    }
    res.status(200).json({data});
});

app.use('/api/users', users);



app.listen(port, ()=>{
    console.log(`my app is listening ${port}`);

})

