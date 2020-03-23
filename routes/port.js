let express = require('express');
let router = express.Router();

module.exports = {
    portRouter: (req, res, next) => {
        res.render('port',{ title: "izabelaworks.com"});
    }
}