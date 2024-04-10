const express = require('express');
const router = express.Router();

const pickingslipsController = require('../controller/pickingslips.controller');

router.get('/', pickingslipsController.browse);
router.get('/printed', pickingslipsController.getPrinted);
router.get('/not-printed', pickingslipsController.getNotPrinted);
router.get('/held', pickingslipsController.getHeld);

module.exports = router;