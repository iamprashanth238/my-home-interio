var express = require('express');
var router = express.Router();
const ctrllocation = require('../controllers/locations');
const ctrlOthers=require('../controllers/others');

const stat = express();

const userRouter = require('./users');

router.use('/users', userRouter);

//use static file

stat.use(express.static('public'));


router.get('/', function(req, res, next) {
  res.get('index', { title: 'My-Home-Interio' });
});


// rendering location pages and other pages
router.get('/', function(req, res){
  res.get('index',{title: 'My Home Interio'});
});


router.get('/gallery',ctrllocation.gallerypage);

router.get('/about',ctrllocation.aboutpage);

router.post('/register',ctrllocation.registerr);
router.get('/register',ctrllocation.registerpage);




module.exports = router;
