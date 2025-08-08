import Todo from './Todo.js';

export default class Project {
    constructor(name) {
        this.name = name;
        this.todos = [];
    }

    addTodo(todo) {
        this.todos.push(todo);
        this.notifyChange();
    }

    removeTodo(todo) {
        this.todos = this.todos.filter(t => t !== todo);
        this.notifyChange();
    }

    getTodos() {
        return this.todos;
    }

    getTodo(id) {
        return this.todos.find(t => t.id === id);
    }

    updateName(name) {
        this.name = name;
    }

    notifyChange() {
        if (this.onChange) {
            this.onChange();
        }
    }

}