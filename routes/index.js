var express = require('express');
var router = express.Router();
const connection = require('../connect.js');

router.get('/news', function(req, res, next) {
  connection.query('SELECT *  FROM (SELECT *, ROW_NUMBER() OVER (PARTITION BY category ORDER BY pub_date DESC) AS row_num FROM newsitems) AS ranked  WHERE row_num <= 8 ORDER BY pub_date DESC;', (err, results, fields) =>{
    // error will be an Error if one occurred during the query
    // results will contain the results of the query
    res.send(results);
  })
});

router.get('/categories', function(req, res, next) {
  connection.query('SELECT * FROM `categories`', (err, results, fields) =>{
    // error will be an Error if one occurred during the query
    // results will contain the results of the query
    res.send(results);
  })
});

router.get('/tin-moi-nhat', function(req, res, next) {
  connection.query('SELECT * FROM `newsitems` ORDER BY `pub_date` DESC LIMIT 8', (err, results, fields) =>{
    // error will be an Error if one occurred during the query
    // results will contain the results of the query
    res.send(results);
  })
});

module.exports = router;