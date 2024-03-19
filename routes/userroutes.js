const express = require('express');
const router =  express.Router();
const usercontroller = require ('../controllers/usercontroler');

router.use('/users', usercontroller);

module.exports = router;
