require('./db/config');

const express = require('express');
const cors = require('cors');
const app = express();
const Users = require('./db/Users')

app.use(express.json());
app.use(cors());

app.post("/register", async (req, res) => {
    let users = new Users(req.body);
    let resuult = await users.save();
    res.send({
        status: 200,
        message: "You have successfully registered on the page"
    });
})

app.post("/sign-up", async (req, res) => {
    // let users = new Users(req.body);
    // let resuult = await users.save();
    res.send({
        status: 200,
        message: "You have successfully sign-up"
    });
})

// app.get('/', (req, res) => {
//     res.send("app is working")
// });

app.listen(5000)

