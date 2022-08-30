const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

//crud

router.get('/', UserController.view);
router.post('/', UserController.find);
router.get('/add-user', UserController.newUser);



// router
router.get('', (req, res) => {
  res.render('main')
});

module.exports = router;