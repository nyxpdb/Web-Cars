const Car = require('../models/Car');

const handleError = (res, err, status = 400, message = "Erro no processo") => {
  return res.status(status).json({ 
    success: false,
    message: message,
    error: err.message 
  });
};

exports.createCar = async (req, res) => {
  try {
    const car = new Car(req.body);
    await car.save();
    return res.status(201).json({
      success: true,
      message: 'Carro criado com sucesso!',
      data: car
    });
  } catch (err) {
    return handleError(res, err);
  }
};

exports.getCars = async (req, res) => {
    try {
      const cars = await Car.find();
      if (cars.length === 0) {
        return res.status(404).json({
          success: false,
          message: 'Nenhum carro encontrado',
          data: []
        });
      }
      return res.status(200).json({
        success: true,
        message: 'Carros encontrados com sucesso!',
        data: cars
      });
    } catch (err) {
      return handleError(res, err, 500, "Erro ao listar carros");
    }
  };
  

const findCarById = async (id) => {
  const car = await Car.findById(id);
  if (!car) throw new Error('Carro não encontrado');
  return car;
};

exports.updateCar = async (req, res) => {
    try {
      const car = await findCarById(req.params.id);
  
      Object.assign(car, req.body);
  
      await car.save();
  
      return res.status(200).json({
        success: true,
        message: 'Carro atualizado com sucesso!',
        data: car
      });
    } catch (err) {
      return handleError(res, err);
    }
  };
  

exports.deleteCar = async (req, res) => {
    try {
      const car = await findCarById(req.params.id);
      await car.deleteOne();  
      return res.status(200).json({
        success: true,
        message: 'Carro deletado com sucesso!',
      });
    } catch (err) {
      return handleError(res, err, 500, "Erro ao deletar carro");
    }
  };
  
