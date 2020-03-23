let express = require('express');
let router = express.Router();

module.exports = {
    contactRouter: (req, res, next) => {
        res.render('contact',{ title: "Contact - izabelaworks.com"});
    }
}