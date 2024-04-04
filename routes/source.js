var express = require('express');
var router = express.Router();
const connection = require('../connect.js');

/* GET users listing. */
router.get('/thanhnien', function(req, res, next) {
  connection.query('SELECT * FROM `newsitems` WHERE `source` = "thanhnien.vn" ORDER BY `pub_date` DESC LIMIT 20', (err, results, fields) =>{
    // error will be an Error if one occurred during the query
    // results will contain the results of the query
    res.send(results);
  })
});

module.exports = router;
