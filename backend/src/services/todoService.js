const Todo = require("../models/todoModel");

exports.createTodo = async (data) => {
    return await Todo.create(data);
};

exports.getTodos = async () => {
    return await Todo.find();
};

exports.getTodoById = async (id) => {
    return await Todo.findById(id);
};

exports.updateTodo = async (id, data) => {
    return await Todo.findByIdAndUpdate(id, data, {
         returnDocument: "after",
         runValidators: true
    });
};

exports.deleteTodo = async (id) => {
    return await Todo.findByIdAndDelete(id);
};