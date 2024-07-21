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

    constructor(private titleService: Title) {
        this.titleService.setTitle("Nilesh Morkar - Resume");
    }
}
