const Car = require('../models/Car');

const handleError = (res, err, status = 500, message = "Erro no processo") => {
  console.error("Detalhes do erro:", err);
  return res.status(status).json({
    success: false,
    message,
    error: err.message || 'Erro desconhecido'
  });
};

const findCarById = async (id) => {
  if (!id || id.length !== 24) {
    throw new Error('ID inválido');
  }

  const car = await Car.findById(id);
  if (!car) {
    throw new Error('Carro não encontrado');
  }

  return car;
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

exports.createMultipleCars = async (req, res) => {
  try {
    const cars = req.body;

    if (!Array.isArray(cars) || cars.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Deve enviar um array de carros para criação"
      });
    }

    const createdCars = await Car.insertMany(cars);

    return res.status(201).json({
      success: true,
      message: `${createdCars.length} carros criados com sucesso!`,
      data: createdCars
    });
  } catch (err) {
    return handleError(res, err);
  }
};

exports.getCars = async (req, res) => {
  try {
    const cars = await Car.find();

    return res.status(200).json({
      success: true,
      message: cars.length
        ? 'Carros encontrados com sucesso!'
        : 'Nenhum carro encontrado',
      data: cars
    });
  } catch (err) {
    return handleError(res, err, 500, "Erro ao listar carros");
  }
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
      message: 'Carro deletado com sucesso!'
    });
  } catch (err) {
    return handleError(res, err, 500, "Erro ao deletar carro");
  }
};


//fix later
exports.deleteAllCars = async (req, res) => {
    try {
        console.warn("⚠️  Operação perigosa: limpando todos os carros do banco de dados.");
        
        const result = await Car.deleteMany({});
        const count = result.deletedCount || 0;

        return res.status(200).json({
            success: true,
            message: `${count} carro(s) deletado(s) com sucesso!`
        });
    } catch (err) {
        console.error("Erro ao deletar todos os carros:", err); // Log do erro
        return handleError(res, err, 500, "Erro ao deletar todos os carros");
    }
};

  
