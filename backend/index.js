const express = require("express");
const cors = require("cors");
const app = express();
const path = require('path')
const mongoose = require("mongoose");
app.use(express.json());
app.use(cors());
//DB URL||URI
const CONNECTION_URL =
  "mongodb+srv://divyam123:tendulkar@merncrud.j7vic.mongodb.net/CRUD";

//Connection Part
mongoose.connect(
  CONNECTION_URL,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  () => console.log("Connected to Database")
);

//Routers
const create = require("./router/create.js");
const get = require("./router/get.js");
const update = require("./router/update.js");
const deletes = require("./router/delete.js");

//API
app.use("/create", create);
app.use("/get", get);
app.use("/update", update);
app.use("/delete", deletes);


if(process.env.NODE_ENV==='production')
{

    app.use('/' , express.static('../frontend/build'))

    app.get('*' , (req , res)=>{

          res.sendFile(path.resolve(__dirname, '../frontend/build/index.html'));

    })

}

app.listen(8003, () => console.log("Running on port 8003"));