const express = require("express");
const app = express();
const cors = require('cors');
const path = require ("path");

app.use(cors());

app.get("/datos", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./datos.json"));
});

const fs = require("fs");

app.get("/", (req, res) => {
    fs.readFile(path.resolve(__dirname,"../client/build/index.html"), "utf8", (err, index) => {
        if(err){
            res.status(500).send(err);
            return ;
        }
        res.send(index);
})
});

app.use(express.static('public'))
//app.use(express.static('./client/public', { root: '.' }))


app.listen(3001, () => console.log("Server ready on port 3001."));

module.exports = app;