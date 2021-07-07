
const fs = require('fs');
// var msg = require('./Messages.js');

function getTodo() {
    return fs
        .readFileSync('./todo.txt')
        .toString()
        .split('\n')
        .slice(0, -1)

}

function setTodo(todos){
    fs.writeFileSync('./todo.txt',todos.join('\l\n'))
}

module.exports={
    getTodo:getTodo,
    setTodo:setTodo
};


