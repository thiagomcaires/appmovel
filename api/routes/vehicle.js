const express = require('express');
const router = express.Router();
const VehicleController = require('../controllers/vehicle');

router.get('/:info', async function(req, res) {
  let info = req.params.info;
  res.send(await VehicleController.info(res, info));
});

module.exports = router;
