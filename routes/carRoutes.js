const express = require('express');
const router = express.Router();
const carController = require('../controllers/carController');

router.post('/', carController.createCar);               // POST /api/cars
router.get('/', carController.getCars);                  // GET /api/cars
router.put('/:id', carController.updateCar);             // PUT /api/cars/:id
router.delete('/:id', carController.deleteCar);          // DELETE /api/cars/:id

router.post('/batch', carController.createMultipleCars); // POST /api/cars/batch
router.delete('/all', carController.deleteAllCars);      // DELETE /api/cars/all


router.get('/welcome', (req, res) => {
  res.json({
    success: true,
    message: 'Hello'
  });
});

module.exports = router;
