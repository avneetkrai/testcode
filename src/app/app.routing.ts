import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewScreenComponent } from './dashboard/view/viewscreen.component';
import { AddScreenComponent } from './dashboard/add/addscreen.component';

export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'view/:id',
        //path: 'view',
        component: ViewScreenComponent
    },
    {
        path: 'add',
        component: AddScreenComponent
    }
]
