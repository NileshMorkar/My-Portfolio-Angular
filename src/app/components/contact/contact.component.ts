import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Info } from './info.type';
import { MyInfo } from './info.data';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss'
})
export class ContactComponent {


    myInfo: Info[] = MyInfo;

    constructor(private titleService: Title) {
        this.titleService.setTitle("Nilesh Morkar - Contact");
    }
}
