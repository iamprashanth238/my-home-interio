var express = require('express');
var router = express.Router();
const ctrlLocation = require('../controllers/locations');
const ctrlOther = require('../controllers/others');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Resturent' });
});
/* Home pages */
router.get('/',ctrlLocation.homelist);
router.get('/location',ctrlLocation.locationInfo);
router.get('/location/addreview',ctrlLocation.addReview);

/* About page */
router.get('/about',ctrlOther.about)

module.exports = router;
