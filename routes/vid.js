let express = require('express');
let router = express.Router();

module.exports = {
    vidRouter: (req, res, next) => {
        res.render('vid',{ title: "izabelaworks.com"});
    }
}