const Todo = require("../models/todo.models");

exports.createTodo = async (req, res) => {

    try {
        const { content } = req.body;

        if (content) {
            const newTodo = await Todo.create({ content });
            res.status(201).json({
                status: 'success',
                data: {
                    newTodo
                }
            })
        } else {
            res.status(404).json({
                status: 'error',
                message: 'fields cant be empty'
            })
        }
    } catch (error) {
        console.log(error);
    }
};

exports.getAllTodo = async (req, res) => {
    try {
        const allTodos = await Todo.findAll({ where: { status: 'active' } });

        res.status(200).json({
            status: 'success',
            data: allTodos
        });

    } catch (error) {
        console.log(error);
    }
};

exports.getTodoById = async (req, res) => {
    try {
        const id = req.params.id;
        const todo = await Todo.findOne({ where: { id } });

        if (todo) {
            res.status(200).json({
                status: 'success',
                data: {
                    todo
                }
            });
        } else {
            res.status(404).json({
                status: 'error',
                message: 'id not found'
            });
        };

    } catch (error) {
        console.log(error);
    }
};

exports.updateTodo = async (req, res) => {
    try {

        const id = req.params.id;
        const { content } = req.body;
        const todo = await Todo.findOne({ where: { id } });

        if (todo) {
            await todo.update({ content });
            res.status(204).json({
                status: 'success',
            });
        } else {
            res.status(404).json({
                status: 'error',
                message: 'id not found'
            });
        }

    } catch (error) {
        console.log(error);
    }
};

exports.deleteTodo = async (req, res) => {

    try {
        const id = req.params.id;
        const todo = await Todo.findOne({ where: { id } });

        if (todo) {
            await todo.update({ status: 'deleted' });
            res.status(204).json({
                status: 'success',
            });
        } else {
            res.status(404).json({
                status: 'error',
                message: 'id not found'
            });
        }
    } catch (error) {
        console.log(error);
    }
};