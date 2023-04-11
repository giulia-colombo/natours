//convention to have express configuration in app.js
const express = require("express");
const app = express(); //calling express() will add a bunch of methods to app
const port = 3000;

app.get("/", (req, res) => {
    res.status(200).json({message: "hello from the server side", app: "Natours"});
}) //.json() sets content type automatically to JSON - no need to manually set this w the headers

app.post("/", (req, res) => {
    res.send("You can post to this endpoint...")
})


app.listen(port, () => {
    console.log(`App running on port ${port}`)
})

