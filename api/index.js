const express = require("express");
const app = express();
const cors = require('cors');

app.use(cors());

app.get("/datos", (req, res) => {
    res.sendFile("./api/datos.json", { root: '.' });
});

app.use(express.static('public'))
//app.use(express.static('./client/public', { root: '.' }))


app.listen(3001, () => console.log("Server ready on port 3001."));

module.exports = app;