const express = require('express');

const route = express.Router();


const createPath = require("../controllers/create.js");

const read_path = require("../controllers/read.js");

route.get("/", read_path.allRestaturent);
route.post("/add", createPath.createRestaurent);
route.patch("/update/:id",createPath.updateRestaurent);
route.post("/signup", createPath.createOwner);
route.get("/signin", read_path.singin);
route.delete("/delete/:id", read_path.delete);
// route.get("/purchase_and_shipment_details", read_path.purchase_and_shipment_details);


module.exports = route;