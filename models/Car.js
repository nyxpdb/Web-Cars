const mongoose = require('mongoose');

const CarSchema = new mongoose.Schema({
  nome:   { type: String, required: true },
  cor:    { type: String, required: true },
  modelo: { type: String, required: true },
  ano:    { type: Number, required: true },
  preco:  { type: Number, required: true }
});

module.exports = mongoose.model('Car', CarSchema);
