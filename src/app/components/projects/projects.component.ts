import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { projectsData } from './projects.data';
import { Project } from './project.type';



interface Filter {
    languges: string[];
    frameworks: string[];
    databases: string[];
}

@Component({
    selector: 'app-projects',
    standalone: true,
    imports: [],
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

    isCollapsed: boolean = false;
    filterSet = new Set<string>();

    filters: Filter = {
        languges: ['Java', 'C#', 'C++', 'Dart'],
        frameworks: ['Angular 17', 'SpringBoot', 'Flutter', 'Hibernate', 'Asp .Net Core 8'],
        databases: ['MySQL', 'PostgreSQL', 'MongoDB']
    }

    projects: Project[] = projectsData;

    constructor(private titleService: Title) {
        this.titleService.setTitle("Nilesh Morkar - Projects");
    }

    filter(name: string) {
        // name = name.toLowerCase();
        console.log(name);

        if (this.filterSet.has(name)) {
            this.filterSet.delete(name);
        } else {
            this.filterSet.add(name);
        }

        if (this.filterSet.size == 0) {
            this.projects = projectsData;
        } else {

            this.projects = projectsData.filter((project: Project) => {

                let flag = false;

                project.technology.forEach(tech => {
                    if (this.filterSet.has(tech)) {
                        flag = true;
                    }
                });

                return flag;
            });
        }

    }


    onResetClick() {
        this.isCollapsed = !this.isCollapsed;
        this.filterSet.clear();
        this.projects = projectsData;
    }
}
