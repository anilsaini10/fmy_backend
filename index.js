const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const url = require("./URL/url");
const { MongoClient, ServerApiVersion } = require('mongodb');

app.use(express.json()) // for json
app.use(express.urlencoded({ extended: true }))

const route = require("./routes/index.js");

var cors = require('cors');
app.use(cors())

const uri = url;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

app.use("", route);



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})