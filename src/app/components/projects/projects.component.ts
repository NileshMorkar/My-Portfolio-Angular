import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { projects } from './projects.data';

interface Project {
    name: string;
    description: string;
    image: string;
    githubLink: string;
    technology: string[];
}

@Component({
    selector: 'app-projects',
    standalone: true,
    imports: [],
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

    projects: Project[] = projects;

    constructor(private titleService: Title) {
        this.titleService.setTitle("Nilesh Morkar - Projects");
    }
}
