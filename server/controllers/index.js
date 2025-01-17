const express = require("express");

const router = express.Router();

const getData = require('../database/queries/getCities');
const postData = require('../database/queries/addCity');

router.get('/cities', (req, res) => {
  getData()
    .then(results => res.json(results.rows))
    .catch(error => console.log(error.stack));
});

router.post('/add-city', (req, res) => {
    postData(req.body)
      .then(results => res.json(results.rows))
      .catch(error => console.log(error.stack));
  });
  
module.exports = router;