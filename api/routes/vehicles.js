const express = require('express');
const router = express.Router();
const VehicleController = require('../controllers/vehicle');


router.get('/', async function(req, res) {
  res.send(await VehicleController.get(res));
});

router.get('/:id', async function(req, res) {
  let id = req.params.id;
  res.send(await VehicleController.show(res, id));
});

router.post('/', async function(req, res) {
  let vehicleInfo = req.body;
  res.send(await VehicleController.create(res, vehicleInfo));
});

router.put('/:id', async function(req, res) {
  let id = req.params.id;
  let vehicleInfo = req.body;
  res.send(await VehicleController.update(res, id, vehicleInfo));
});

router.delete('/:id', async function(req, res) {
  let id = req.params.id;
  res.send(await VehicleController.delete(res, id));
});

module.exports = router;
