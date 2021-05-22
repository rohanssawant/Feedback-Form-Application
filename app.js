const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const formRouter = require("./routes/formRoutes.js");
const app = express();

const PORT = process.env.PORT || 4001;

app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));

const dbURI = "mongodb+srv://user1:user1@cluster0.eayuf.mongodb.net/FeedbackForm?retryWrites=true&w=majority"
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(
    (result) => {
        console.log("connected to db");
    }
)
.catch(
    (error) => {
        console.log(`error: ${error}`);
    }
)
app.use(bodyParser.urlencoded({ extended : true }));




app.get("/", (req, res) => {
    res.render('index');
})
app.use('/feedback', formRouter);

app.listen(PORT, console.log(`Server is running on port ${PORT}`));