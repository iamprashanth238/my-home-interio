var express = require('express');
var router = express.Router();
// calling the User model
const User = require('../../app_api/models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// POST endpoint to register a new user
router.post('/register', async (req, res) => {
  try {
    const { name, email, phoneNumber, password } = req.body;
    const user = new User({ name, email, phoneNumber, password });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Error registering user' });
  }
});

module.exports = router;
