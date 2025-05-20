import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ReleasesComponent } from './pages/releases/releases.component';

export const routes: Routes = [
    {
        path: "",
        pathMatch: "full",
        component: HomeComponent
    },
    {
        path: "contact",
        pathMatch: "full",
        component: ContactComponent
    },
    {
        path: "dashboard",
        pathMatch: "full",
        component: DashboardComponent
    },
    {
        path: "home",
        pathMatch: "full",
        component: HomeComponent
    },
    {
        path: "login",
        pathMatch: "full",
        component: LoginComponent
    },
    {
        path: "releases",
        pathMatch: "full",
        component: ReleasesComponent
    }
];