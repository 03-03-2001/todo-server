const todoService = require("../services/todoService");

exports.createTodo = async (req, res, next) => {
    try {
        const todo = await todoService.createTodo(req.body);

        res.status(201).json({
            success: true,
            data: todo
        });
    } catch (error) {
        next(error);
    }
};

exports.getTodos = async (req, res, next) => {
    try {
        const todos = await todoService.getTodos();

        res.json({
            success: true,
            data: todos
        });
    } catch (error) {
        next(error);
    }
};

exports.getTodoById = async (req, res, next) => {
    try {
        const todo = await todoService.getTodoById(req.params.id);

        if (!todo) {
            return res.status(404).json({
                message: "Todo not found"
            });
        }

        res.json(todo);
    } catch (error) {
        next(error);
    }
};

exports.updateTodo = async (req, res, next) => {
    try {
        const todo = await todoService.updateTodo(req.params.id, req.body);

        if (!todo) {
            return res.status(404).json({
                message: "Todo not found"
            });
        }

        res.json(todo);
    } catch (error) {
        next(error);
    }
};

exports.deleteTodo = async (req, res, next) => {
    try {
        const todo = await todoService.deleteTodo(req.params.id);

        if (!todo) {
            return res.status(404).json({
                message: "Todo not found"
            });
        }

        res.json({
            message: "Todo Deleted Successfully"
        });
    } catch (error) {
        next(error);
    }
};