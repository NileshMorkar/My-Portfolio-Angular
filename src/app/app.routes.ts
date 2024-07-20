import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectsComponent } from './components/projects/projects.component';

export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "/home", component: HomeComponent },
    { path: "/projects", component: ProjectsComponent },
    { path: "/resume", component: ResumeComponent },
    { path: "/contact", component: ContactComponent },
    { path: "**", redirectTo: "", pathMatch: "full" },
];
