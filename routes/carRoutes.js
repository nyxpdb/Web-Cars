const express = require('express');
const router = express.Router();
const carController = require('../controllers/carController');

/**
 * @swagger
 * components:
 *   schemas:
 *     Car:
 *       type: object
 *       required:
 *         - nome
 *         - cor
 *         - modelo
 *         - ano
 *         - preco
 *         - imagem
 *       properties:
 *         id:
 *           type: string
 *           description: ID do carro
 *         nome:
 *           type: string
 *           description: Nome do carro
 *         cor:
 *           type: string
 *           description: Cor do carro
 *         modelo:
 *           type: string
 *           description: Modelo do carro
 *         ano:
 *           type: integer
 *           description: Ano de fabricação do carro
 *         preco:
 *           type: number
 *           format: float
 *           description: Preço do carro
 *         imagem:
 *           type: string
 *           description: URL da imagem do carro
 */

/* ==== POST ==== */

/**
 * @swagger
 * /api/cars:
 *   post:
 *     summary: Cria um novo carro
 *     tags: [Cars]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Car'
 *     responses:
 *       201:
 *         description: Carro criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Car'
 */
router.post('/', carController.createCar);

/**
 * @swagger
 * /api/cars/multiple:
 *   post:
 *     summary: Cria múltiplos carros
 *     tags: [Cars]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *             items:
 *               $ref: '#/components/schemas/Car'
 *     responses:
 *       201:
 *         description: Carros criados com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Car'
 */
router.post('/multiple', carController.createMultipleCars);

/* ==== GET ==== */

/**
 * @swagger
 * /api/cars:
 *   get:
 *     summary: Retorna todos os carros
 *     tags: [Cars]
 *     responses:
 *       200:
 *         description: Lista de carros
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Car'
 */
router.get('/', carController.getCars);

/**
 * @swagger
 * /api/cars/{id}:
 *   get:
 *     summary: Retorna um carro pelo ID
 *     tags: [Cars]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do carro
 *     responses:
 *       200:
 *         description: Carro encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Car'
 *       404:
 *         description: Carro não encontrado
 */
router.get('/:id', carController.getCarById);

/**
 * @swagger
 * /api/cars/welcome:
 *   get:
 *     summary: Endpoint de boas-vindas
 *     tags: [Misc]
 *     responses:
 *       200:
 *         description: Retorna uma mensagem simples
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Bem-vindo à API de Carros!"
 */
router.get('/welcome', (req, res) => {
  res.status(200).json({ message: "Bem-vindo à API de Carros!" });
});

/* ==== PUT ==== */

/**
 * @swagger
 * /api/cars/{id}:
 *   put:
 *     summary: Atualiza um carro pelo ID
 *     tags: [Cars]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do carro
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Car'
 *     responses:
 *       200:
 *         description: Carro atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Car'
 */
router.put('/:id', carController.updateCar);

/* ==== DELETE ==== */

/**
 * @swagger
 * /api/cars/{id}:
 *   delete:
 *     summary: Deleta um carro pelo ID
 *     tags: [Cars]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do carro
 *     responses:
 *       200:
 *         description: Carro deletado com sucesso
 */
router.delete('/:id', carController.deleteCar);

/**
 * @swagger
 * /api/cars/delete-all:
 *   delete:
 *     summary: Deleta todos os carros
 *     tags: [Cars]
 *     responses:
 *       200:
 *         description: Todos os carros deletados com sucesso
 */
router.delete('/delete-all', carController.deleteAllCars);

module.exports = router;
