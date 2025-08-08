import Project from "./Project.js";
import Todo from "./Todo.js";

export class StorageService {
    static STORAGE_KEY = 'todo-app-projects';

    static saveProjects(projects) {
        try {
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(projects));
        } catch (error) {
            console.error('Error saving projects:', error);
        }
    }

    static loadProjects() {
        try {
            const projects = localStorage.getItem(this.STORAGE_KEY);
            console.log(projects);
            if (!projects) return [];
            
            const projectsArray = JSON.parse(projects);
            console.log(projectsArray);
            return projectsArray.map(project => {
                const newProject = new Project(project.name);
                newProject.onChange = () => {
                    this.saveProjects(projects);
                };
                newProject.todos = project.todos.map(todo => {
                    const newTodo = new Todo(todo.title, 
                        todo.description, 
                        todo.dueDate, 
                        todo.priority);
                    newTodo.id = todo.id;
                    newTodo.completed = todo.completed;
                    return newTodo;
                });
                return newProject;
            });
        } catch (error) {
            console.error('Error loading projects:', error);
            return [];
        }
    }

    static clearStorage() {
        localStorage.removeItem(this.STORAGE_KEY);
    }
}