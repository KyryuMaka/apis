var express = require('express');
var router = express.Router();
const connection = require('../connect.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
    var title = decodeURIComponent(req.query.title);
    var source = decodeURIComponent(req.query.source);
    console.log((title))
    if (title !== "undefined") {
        connection.query(`SELECT * FROM newsitems WHERE title LIKE N'%${title}%' ORDER BY pub_date DESC LIMIT 20`, (err, results, fields) =>{
            // error will be an Error if one occurred during the query
            // results will contain the results of the query
            res.send(results);
        })
    }else{
        if (source !== "undefined") {
            connection.query(`SELECT * FROM newsitems WHERE source LIKE N'%${source}%' ORDER BY pub_date DESC LIMIT 20`, (err, results, fields) =>{
                // error will be an Error if one occurred during the query
                // results will contain the results of the query
                res.send(results);
            })
        }else{
            res.send("null");
        }
    }
});

module.exports = router;
