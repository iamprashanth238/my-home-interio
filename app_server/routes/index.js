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

/* SignUp page */

router.get('/signup',ctrlLocation.signuppage);


/* Signin page */
router.get('/signin',ctrlLocation.signinpage);


module.exports = router;
