import Todo from './Todo.js';

export default class Project {
    constructor(name) {
        this.name = name;
        this.todos = [];
        this.onChange = null; // Callback para notificar cambios
    }

    addTodo(todo) {
        this.todos.push(todo);
        // Configurar el callback del todo para que notifique al proyecto
        todo.setOnChange(() => this.notifyChange());
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
        this.notifyChange();
    }

    // Método para configurar el callback
    setOnChange(callback) {
        this.onChange = callback;
        // Configurar callbacks para todos los todos existentes
        this.todos.forEach(todo => {
            todo.setOnChange(() => this.notifyChange());
        });
    }

    notifyChange() {
        if (this.onChange) {
            this.onChange();
        }
    }
}