import { StorageService } from "./StorageService.js";

export default class Admin {
    constructor() {
        this.projects = StorageService.loadProjects();
    }

    addProject(project) {
        this.projects.push(project);
        project.onChange = () => {
            this.saveToStorage();
        };
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
        project.updateProjectName(name);
        this.saveToStorage();
    }

    saveToStorage() {
        StorageService.saveProjects(this.projects);
    }
}