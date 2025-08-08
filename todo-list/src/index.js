import "./styles.css";
import Project from "./Project.js";
import Admin from "./Admin.js";
import Todo, { Priority } from "./Todo.js";

const admin = new Admin();

function init() {
    screenController();
}

function screenController() {
    const content = document.getElementById("content");
    content.innerHTML = "";

    showProjects();
}

function showTodos(project) {
    const content = document.getElementById("content");
    content.innerHTML = "";

    const backBtn = document.createElement("button");
    backBtn.classList.add("back-btn");
    backBtn.innerHTML = "Back";
    backBtn.addEventListener("click", () => {
        screenController();
    });
    content.appendChild(backBtn);

    const addTodoBtn = document.createElement("button");
    addTodoBtn.classList.add("add-todo-btn");
    addTodoBtn.innerHTML = "Add Todo";
    addTodoBtn.addEventListener("click", () => {
        project.addTodo(new Todo("New Todo", "Description", "2025-08-07", Priority.HIGH));
        showTodos(project);
    });
    content.appendChild(addTodoBtn);

    const todoContainer = document.createElement("div");
    todoContainer.classList.add("todo-container");

    project.getTodos().forEach(todo => {
        const todoElement = document.createElement("div");
        todoElement.classList.add("todo-item");
        todoElement.innerHTML = `
            <div class="todo-completed-checkbox ${todo.completed ? 'checked' : ''}" 
            data-todo-id="${todo.id}"></div>
            <input type="text" value="${todo.title}" class="todo-title">
            <input type="text" value="${todo.description}" class="todo-description">
            <input type="date" value="${todo.dueDate}" class="todo-due-date">
            <select class="todo-priority" data-todo-id="${todo.id}">
                <option value="${Priority.LOW}" ${todo.priority === Priority.LOW ? 'selected' : ''}>${Priority.LOW}</option>
                <option value="${Priority.MEDIUM}" ${todo.priority === Priority.MEDIUM ? 'selected' : ''}>${Priority.MEDIUM}</option>
                <option value="${Priority.HIGH}" ${todo.priority === Priority.HIGH ? 'selected' : ''}>${Priority.HIGH}</option>
            </select>
            <button class="delete-todo-btn">Delete</button>
        `;

        // Agregar event listeners
        addTodoListeners(todoElement, todo, project);

        todoContainer.appendChild(todoElement);
    });

    content.appendChild(todoContainer);
}

function addTodoListeners(todoElement, todo, project) {
    todoElement.querySelector(".todo-title").addEventListener("blur", () => {
        todo.updateTitle(todoElement.querySelector(".todo-title").value);
    });

    todoElement.querySelector(".todo-description").addEventListener("blur", () => {
        todo.updateDescription(todoElement.querySelector(".todo-description").value);
    });

    todoElement.querySelector(".todo-due-date").addEventListener("blur", () => {
        todo.updateDueDate(todoElement.querySelector(".todo-due-date").value);
    });

    todoElement.querySelector(".todo-priority").addEventListener("change", () => {
        todo.updatePriority(todoElement.querySelector(".todo-priority").value);
    });

    todoElement.querySelector(".todo-completed-checkbox").addEventListener("click", () => {
        todo.toggleCompleted();
        // Solo actualizar el checkbox, no re-renderizar toda la lista
        todoElement.querySelector(".todo-completed-checkbox").classList.toggle("checked");
    });

    todoElement.querySelector(".delete-todo-btn").addEventListener("click", () => {
        project.removeTodo(todo);
        showTodos(project);
    });
}

function showProjects() {
    const content = document.getElementById("content");
    content.innerHTML = "";

    const addProjectBtn = document.createElement("button");
    addProjectBtn.classList.add("add-project-btn");
    addProjectBtn.innerHTML = "Add Project";
    addProjectBtn.addEventListener("click", () => {
        admin.addProject(new Project("New Project"));
        showProjects();
    });
    content.appendChild(addProjectBtn);
    
    const projectContainer = document.createElement("div");
    projectContainer.innerHTML = ``;
    projectContainer.classList.add("project-container");

    admin.getProjects().forEach(project => {
        const projectElement = document.createElement("div");
        projectElement.classList.add("project-item");
        projectElement.innerHTML = `
            <input type="text" value="${project.name}" class="project-name">
            <button class="delete-project-btn">Delete</button>
            <button class="view-todos-btn">View Todos</button>
        `;
        
        const viewTodosBtn = projectElement.querySelector(".view-todos-btn");
        viewTodosBtn.addEventListener("click", () => {
            showTodos(project, projectElement);
        });
        
        projectElement.querySelector(".project-name").addEventListener("blur", () => {
            project.updateName(projectElement.querySelector(".project-name").value);
        });
        
        projectElement.querySelector(".delete-project-btn").addEventListener("click", () => {
            admin.deleteProject(project);
            showProjects();
        });
        
        projectContainer.appendChild(projectElement);
    });

    content.appendChild(projectContainer);
}

init();