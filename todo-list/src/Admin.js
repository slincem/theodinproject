import { StorageService } from "./StorageService.js";

export default class Admin {
    constructor() {
        this.projects = StorageService.loadProjects();
        // Configurar callbacks para todos los proyectos cargados
        this.projects.forEach(project => {
            project.setOnChange(() => this.saveToStorage());
        });
    }

    addProject(project) {
        this.projects.push(project);
        project.setOnChange(() => this.saveToStorage());
        this.saveToStorage();
    }

    getProjects() {
        return this.projects;
    }

    deleteProject(project) {
        this.projects = this.projects.filter(p => p !== project);
        this.saveToStorage();
    }

    updateProjectName(project, name) {
        project.updateName(name);
        this.saveToStorage();
    }

    saveToStorage() {
        StorageService.saveProjects(this.projects);
    }
}