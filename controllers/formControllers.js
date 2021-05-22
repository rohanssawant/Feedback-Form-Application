const Feedback = require('../models/feedbackModel');
const express = require("express");
const path = require('path');

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

const viewFeedback = (req, res) => {
    Feedback.find()
    .then((result)=> {
        const data = result;
        res.render('feedback', { data });
        
    })//{res.send(result)})
    .catch((error) => {console.log(`error ${error}`)})
}

const createFeedback =  (req,res) => {
    const fb = new Feedback ({
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        email: req.body.email,
        feedback: req.body.feedback
    })
    fb.save()
    .then((result)=> {res.render('submitted')})//{console.log(newFb._id)})
    .catch((error) => {console.log(`error ${error}`)})
}

const getFeedbackById = (req, res) => {
    Feedback.findById(req.param.id)
    .then((results)=> {console.log("getFbByID is hit")} ) //{res.render('feedback')}) //{res.send(results)})
    .catch((error) => {console.log(`error ${error}`)})
}



module.exports ={viewFeedback, createFeedback, getFeedbackById}