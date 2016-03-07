var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var products = [];
    products.push({
      id: 1,
      title: "1111111",
      text: "11111111111111111111"
    },
    {
      id: 2,
      title: "222222",
      text: "22222222222222222222"
    }
    );
  res.json({
    posts: products
  });
  //res.json({products: "respond with a products"});
});

module.exports = router;