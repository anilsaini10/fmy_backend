const { request } = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const url = require("../URL/url");
var mongo = require('mongodb');

const uri = url;
const client = new MongoClient(uri);

const db = client.db("Restaurent");
const collection = db.collection("RestaurentList");
const createRestaurent = async (req, res) => {

    if (req.body.name ==  null  || req.body.address == "" || req.body.contact == "" || req.body.shop_name == "" ||
        req.body.pincode == "" || req.body.city == "" || req.body.state == "" || req.body.type_of_restaurent == "" || req.body.timing == "") {
        return res.send({ "Error": "Invalid Inputs", "data":req.body });
    };

    await collection.insertOne({
        "Name": req.body.name,
        "Address": req.body.address,
        "Contact": req.body.contact,
        "ShopName": req.body.shop_name,
        "Pincode": req.body.pincode,
        "City": req.body.city,
        "State": req.body.state,
        "Type_Of_Restaurent": req.body.type_of_restaurent,
        "Timing": req.body.timing,
        "Image": req.body.url
    });

    return res.send({ "success": "200" });
};

const updateRestaurent = async (req, res) => {
    const updateObject = req.body; // {last_name : "smith", age: 44}
    const id = req.params.id;

    // create a filter for a movie to update
    const filter = { _id: new mongo.ObjectId(id) };
    // this option instructs the method to create a document if no documents match the filter
    const options = { upsert: true };
    // create a document that sets the plot of the restaurent.
    const updateDoc = {$set: {updateObject}};
    const result = await collection.replaceOne(filter, updateObject);
    console.log(result)
    return res.send({ "success": "200","data":result });
}


const createOwner = async (req, res) => {

    if (req.body.Username == "" || req.body.Password == "" || req.body.Username == null || req.body.Password == null || req.body.Username == undefined || req.body.Password == undefined) {
        return req.send({ "Error": "Invalid Inputs" });
    }

    const resturentOwner = db.collection("resturentOwner");

    await resturentOwner.insertOne({
        "Username": req.body.Username,
        "Password": req.body.Password,
    });

    return res.send({ "Success": "User Is Created" });
};


module.exports = {

    createRestaurent: createRestaurent,
    createOwner: createOwner,
    updateRestaurent: updateRestaurent,

};