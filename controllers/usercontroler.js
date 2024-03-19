const express =  require('express');
const dbconecta = require('../models/dbconnection');
const router = express.Router();

router.get('/' , (req,res) => {
   dbconecta.query('', (err, result) => {
    if(err) throw err;
    res.json (result)

   })


})
module.exports = router;