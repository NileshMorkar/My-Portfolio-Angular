import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

interface Skills {
    "frameworks/Libraries": string[];
    programming_languages: string[];
    databases: string[];

    other: string[]
}

interface Dsa {
    name: string;
    progress: number;
    solved: number;
    link?: string
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
            progress: 92,
            solved: 554,
            link: "https://www.geeksforgeeks.org/user/nilesh_morkar/"
        },
        {
            name: "LeetCode",
            progress: 74,
            solved: 392,
            link: "https://leetcode.com/u/Morkar_Nilesh/"
        },
        {
            name: "Other",
            progress: 28,
            solved: 154
        },
    ];

    skills: Skills = {
        "frameworks/Libraries": ["Spring", "SpringBoot", "Asp .Net Core 8", "Flutter", "Angular 17", "Hibernate", "Project Reactor", "Spring WebFlux"],
        programming_languages: ["C/C++", "Java SE", "Java EE", "TypeScript", "JavaScript", "Dart", "C#",],
        databases: ["MySql", "MongoDB", "FireBase", "Redis"],
        other: ["MicroServices", "` 8Reactive Programming", "Swagger UI", "HTML/CSS/Tailwind CSS", "Software Design Patterns", "Rest API", "Aspect Oriented Programming (AOP)", "Object Oriented Programming (OOPs)", "Git/Github"]
    }


    constructor(private titleService: Title) {
        this.titleService.setTitle("Nilesh Morkar - Home");
    }

}
