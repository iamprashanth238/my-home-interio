var express = require('express');
var router = express.Router();
const ctrlLocation = require('../controllers/locations');
const ctrlOther = require('../controllers/others');
const stat = express();

//use static file

stat.use(express.static('public'));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My-Home-Interio' });
});


/*Design page*/
router.get('/design-page',ctrlLocation.designpage);
/* Home pages */
//router.get('/',ctrlLocation.homepage);

module.exports = router;
