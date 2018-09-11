import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { PrivateComponent } from './private/private.component';


const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'home', component: HomeComponent },
            { path: 'private', component: PrivateComponent },
            { path: '', redirectTo: 'home', pathMatch: 'full' }
        ]
    }
];


export const PAGE_ROUTES = RouterModule.forChild(pagesRoutes);
