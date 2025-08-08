// Enum para prioridades
export const Priority = Object.freeze({
    LOW: 'Low',
    MEDIUM: 'Medium',
    HIGH: 'High'
});

// Función helper para validar prioridades
export function isValidPriority(priority) {
    return Object.values(Priority).includes(priority);
}

export default class Todo {
    constructor(title, description, dueDate, priority) {
        this.id = Math.random().toString(36).substring(2, 15);
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = isValidPriority(priority) ? priority : Priority.MEDIUM; // Default a MEDIUM si no es válida
        this.completed = false;
    }

    // Métodos para actualizar propiedades del TODO
    updatePriority(newPriority) {
        if (isValidPriority(newPriority)) {
            this.priority = newPriority;
        } else {
            throw new Error(`Invalid priority: ${newPriority}. Must be one of: ${Object.values(Priority).join(', ')}`);
        }
    }

    updateTitle(newTitle) {
        this.title = newTitle;
    }

    updateDescription(newDescription) {
        this.description = newDescription;
    }

    updateDueDate(newDueDate) {
        this.dueDate = newDueDate;
    }

    toggleCompleted() {
        this.completed = !this.completed;
    }

    // Método para actualizar múltiples propiedades a la vez
    update(newData) {
        if (newData.title !== undefined) this.title = newData.title;
        if (newData.description !== undefined) this.description = newData.description;
        if (newData.dueDate !== undefined) this.dueDate = newData.dueDate;
        if (newData.priority !== undefined) this.updatePriority(newData.priority);
        if (newData.completed !== undefined) this.completed = newData.completed;
    }
}