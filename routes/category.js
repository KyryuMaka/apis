var express = require('express');
var router = express.Router();
const connection = require('../connect.js');


/* GET users listing. */
router.get('/chinh-tri', function(req, res, next) {
  connection.query('SELECT * FROM `newsitems` WHERE `category` = "Chính trị" ORDER BY `pub_date` DESC LIMIT 20', (err, results, fields) =>{
    // error will be an Error if one occurred during the query
    // results will contain the results of the query
    res.send(results);
  })
});

router.get('/doanh-nghiep', function(req, res, next) {
  connection.query('SELECT * FROM `newsitems` WHERE `category` = "Doanh nghiệp" ORDER BY `pub_date` DESC LIMIT 20', (err, results, fields) =>{
    // error will be an Error if one occurred during the query
    // results will contain the results of the query
    res.send(results);
  })
});

router.get('/du-lich', function(req, res, next) {
  connection.query('SELECT * FROM `newsitems` WHERE `category` = "Du lịch" ORDER BY `pub_date` DESC LIMIT 20', (err, results, fields) =>{
    // error will be an Error if one occurred during the query
    // results will contain the results of the query
    res.send(results);
  })
});

router.get('/nhip-song-tre', function(req, res, next) {
  connection.query('SELECT * FROM `newsitems` WHERE `category` = "GenZ" ORDER BY `pub_date` DESC LIMIT 20', (err, results, fields) =>{
    // error will be an Error if one occurred during the query
    // results will contain the results of the query
    res.send(results);
  })
});

router.get('/giai-tri', function(req, res, next) {
  connection.query('SELECT * FROM `newsitems` WHERE `category` = "Giải trí" ORDER BY `pub_date` DESC LIMIT 20', (err, results, fields) =>{
    // error will be an Error if one occurred during the query
    // results will contain the results of the query
    res.send(results);
  })
});

router.get('/giao-duc', function(req, res, next) {
  connection.query('SELECT * FROM `newsitems` WHERE `category` = "Giáo dục" ORDER BY `pub_date` DESC LIMIT 20', (err, results, fields) =>{
    // error will be an Error if one occurred during the query
    // results will contain the results of the query
    res.send(results);
  })
});

router.get('/giao-thong', function(req, res, next) {
  connection.query('SELECT * FROM `newsitems` WHERE `category` = "Giao thông" ORDER BY `pub_date` DESC LIMIT 20', (err, results, fields) =>{
    // error will be an Error if one occurred during the query
    // results will contain the results of the query
    res.send(results);
  })
});

router.get('/khac', function(req, res, next) {
  connection.query('SELECT * FROM `newsitems` WHERE `category` = "Khác" ORDER BY `pub_date` DESC LIMIT 20', (err, results, fields) =>{
    // error will be an Error if one occurred during the query
    // results will contain the results of the query
    res.send(results);
  })
});

router.get('/khoa-hoc-cong-nghe', function(req, res, next) {
  connection.query('SELECT * FROM `newsitems` WHERE `category` = "Khoa học - Công nghệ" ORDER BY `pub_date` DESC LIMIT 20', (err, results, fields) =>{
    // error will be an Error if one occurred during the query
    // results will contain the results of the query
    res.send(results);
  })
});

router.get('/kinh-te-tai-chinh', function(req, res, next) {
  connection.query('SELECT * FROM `newsitems` WHERE `category` = "Kinh tế - Tài chính" ORDER BY `pub_date` DESC LIMIT 20', (err, results, fields) =>{
    // error will be an Error if one occurred during the query
    // results will contain the results of the query
    res.send(results);
  })
});

router.get('/noi-bat', function(req, res, next) {
  connection.query('SELECT * FROM `newsitems` WHERE `category` = "Nổi bật" ORDER BY `pub_date` DESC LIMIT 20', (err, results, fields) =>{
    // error will be an Error if one occurred during the query
    // results will contain the results of the query
    res.send(results);
  })
});

router.get('/phap-luat', function(req, res, next) {
  connection.query('SELECT * FROM `newsitems` WHERE `category` = "Pháp luật" ORDER BY `pub_date` DESC LIMIT 20', (err, results, fields) =>{
    // error will be an Error if one occurred during the query
    // results will contain the results of the query
    res.send(results);
  })
});

router.get('/phong-su', function(req, res, next) {
  connection.query('SELECT * FROM `newsitems` WHERE `category` = "Phóng sự" ORDER BY `pub_date` DESC LIMIT 20', (err, results, fields) =>{
    // error will be an Error if one occurred during the query
    // results will contain the results of the query
    res.send(results);
  })
});

router.get('/quoc-phong-an-ninh', function(req, res, next) {
  connection.query('SELECT * FROM `newsitems` WHERE `category` = "Quốc phòng - An ninh" ORDER BY `pub_date` DESC LIMIT 20', (err, results, fields) =>{
    // error will be an Error if one occurred during the query
    // results will contain the results of the query
    res.send(results);
  })
});

router.get('/suc-khoe-sac-dep', function(req, res, next) {
  connection.query('SELECT * FROM `newsitems` WHERE `category` = "Sức khoẻ - Sắc đẹp" ORDER BY `pub_date` DESC LIMIT 20', (err, results, fields) =>{
    // error will be an Error if one occurred during the query
    // results will contain the results of the query
    res.send(results);
  })
});

router.get('/thao-luan-tam-su', function(req, res, next) {
  connection.query('SELECT * FROM `newsitems` WHERE `category` = "Thảo luận - tâm sự" ORDER BY `pub_date` DESC LIMIT 20', (err, results, fields) =>{
    // error will be an Error if one occurred during the query
    // results will contain the results of the query
    res.send(results);
  })
});

router.get('/the-gioi', function(req, res, next) {
  connection.query('SELECT * FROM `newsitems` WHERE `category` = "Thế giới" ORDER BY `pub_date` DESC LIMIT 20', (err, results, fields) =>{
    // error will be an Error if one occurred during the query
    // results will contain the results of the query
    res.send(results);
  })
});

router.get('/the-thao', function(req, res, next) {
  connection.query('SELECT * FROM `newsitems` WHERE `category` = "Thể thao" ORDER BY `pub_date` DESC LIMIT 20', (err, results, fields) =>{
    // error will be an Error if one occurred during the query
    // results will contain the results of the query
    res.send(results);
  })
});

router.get('/thi-truong', function(req, res, next) {
  connection.query('SELECT * FROM `newsitems` WHERE `category` = "Thị trường" ORDER BY `pub_date` DESC LIMIT 20', (err, results, fields) =>{
    // error will be an Error if one occurred during the query
    // results will contain the results of the query
    res.send(results);
  })
});

router.get('/thoi-trang', function(req, res, next) {
  connection.query('SELECT * FROM `newsitems` WHERE `category` = "Thời trang" ORDER BY `pub_date` DESC LIMIT 20', (err, results, fields) =>{
    // error will be an Error if one occurred during the query
    // results will contain the results of the query
    res.send(results);
  })
});

// router.get('/tin-moi', function(req, res, next) {
//   connection.query('SELECT * FROM `newsitems` WHERE `category` = "Tin mới" ORDER BY `pub_date` DESC LIMIT 20', (err, results, fields) =>{
//     // error will be an Error if one occurred during the query
//     // results will contain the results of the query
//     res.send(results);
//   })
// });

router.get('/tin-moi', function(req, res, next) {
  connection.query('SELECT * FROM `newsitems` ORDER BY `pub_date` DESC LIMIT 20', (err, results, fields) =>{
    // error will be an Error if one occurred during the query
    // results will contain the results of the query
    res.send(results);
  })
});

router.get('/tin-tuc-thoi-su', function(req, res, next) {
  connection.query('SELECT * FROM `newsitems` WHERE `category` = "Tin tức - Thời sự" ORDER BY `pub_date` DESC LIMIT 20', (err, results, fields) =>{
    // error will be an Error if one occurred during the query
    // results will contain the results of the query
    res.send(results);
  })
});

router.get('/van-hoa-xa-hoi', function(req, res, next) {
  connection.query('SELECT * FROM `newsitems` WHERE `category` = "Văn hóa - Xã hội" ORDER BY `pub_date` DESC LIMIT 20', (err, results, fields) =>{
    // error will be an Error if one occurred during the query
    // results will contain the results of the query
    res.send(results);
  })
});

router.get('/xe', function(req, res, next) {
  connection.query('SELECT * FROM `newsitems` WHERE `category` = "Xe" ORDER BY `pub_date` DESC LIMIT 20', (err, results, fields) =>{
    // error will be an Error if one occurred during the query
    // results will contain the results of the query
    res.send(results);
  })
});

router.get('/xem-nhieu', function(req, res, next) {
  connection.query('SELECT * FROM `newsitems` WHERE `category` = "Xem nhiều" ORDER BY `pub_date` DESC LIMIT 20', (err, results, fields) =>{
    // error will be an Error if one occurred during the query
    // results will contain the results of the query
    res.send(results);
  })
});

module.exports = router;
