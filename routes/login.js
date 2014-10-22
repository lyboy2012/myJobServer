/**
 * Created by liying on 2014/10/22.
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
    res.json({'state': 1, 'id': '001'});
});

module.exports = router;
