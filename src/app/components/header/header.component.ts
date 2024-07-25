import { Component } from '@angular/core';
import { icons } from './Icons.data';
import { Icon } from './Icon.type';


@Component({
    selector: 'app-header',
    standalone: true,
    imports: [],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {

    icons: Icon[] = icons;
}