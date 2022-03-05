const express = require('express');
const router = express.Router();

// controller
const todoController = require('../controllers/todo.controller');

router.post('/', todoController.createTodo);
router.get('/', todoController.getAllTodo);
router.get('/:id', todoController.getTodoById);
router.patch('/:id', todoController.updateTodo);
router.delete('/:id', todoController.deleteTodo);

module.exports = router;