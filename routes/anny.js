const exp = require('express');
const router = exp.Router();
const annyCon = require('../controllers/annyController');

router.get('/anny',annyCon.anny);
router.get('/anny1',annyCon.anny1);

module.exports = router;