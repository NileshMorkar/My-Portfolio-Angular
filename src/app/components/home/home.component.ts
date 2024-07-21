import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

interface Skills {
    frameworks: string[];
    programming_languages: string[];
    databases: string[];

    other: string[]
}

interface Dsa {
    name: string;
    progress: number;
    solved: number;
}

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'

})
export class HomeComponent {
    leetcodeSolved: number = 400;
    gfgSolved: number = 550;
    maxProblems: number = 1000;

    leetcodeProgress = 70;
    gfgProgress = 90;


    dsa_info: Dsa[] = [
        {
            name: "GFG",
            progress: 90,
            solved: 551
        },
        {
            name: "LeetCode",
            progress: 74,
            solved: 385
        },
        {
            name: "Other",
            progress: 28,
            solved: 154
        },
    ];

    skills: Skills = {
        frameworks: ["Spring", "SpringBoot", "Asp .Net Core 8", "Flutter", "Angular 17", "Hibernate",],
        programming_languages: ["C/C++", "Java SE", "Java EE", "TypeScript", "JavaScript", "Dart", "C#",],
        databases: ["MySql", "MongoDB", "FireBase", "Redis"],
        other: ["Swagger UI (Open API)", "Microservices", "HTML", "CSS", "Tailwind", "Software Design Patterns", "Git/Github", "Rest API"]
    }


    constructor(private titleService: Title) {
        this.titleService.setTitle("Nilesh Morkar - Home");
    }

}
