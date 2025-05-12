const express = require('express');
const router = express.Router();
const carController = require('../controllers/carController');

router.post('/new', carController.createCar);
router.get('/all', carController.getCars); 
router.put('/edit/:id', carController.updateCar);
router.delete('/delete/:id', carController.deleteCar);

router.get('/welcome', (req, res) => {
  res.json({
    success: true,
    message: 'Hello'
  });
});

module.exports = router;
