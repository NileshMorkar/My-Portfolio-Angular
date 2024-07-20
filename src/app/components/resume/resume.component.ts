import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

interface Dsa {
    name: string;
    progress: number;
    solved: number;
}

@Component({
    selector: 'app-resume',
    standalone: true,
    imports: [],
    templateUrl: './resume.component.html',
    styleUrl: './resume.component.scss'
})
export class ResumeComponent {
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

    constructor(private titleService: Title) {
        this.titleService.setTitle("Nilesh Morkar - Resume");
    }
}
