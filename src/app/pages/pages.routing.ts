import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { InicioComponent } from './inicio/inicio.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

const routes: Routes = [

    {
        path: 'inicio',
        component: PagesComponent,
        children: [
            { path: '', component: InicioComponent },
        ]
    },
    {
        path: 'account-settings',
        component: PagesComponent,
        children: [
            { path: '', component: AccountSettingsComponent, data: { titulo: 'Ajustes de cuenta' } },
        ]
    },
    {
        path: 'dashboard',
        component: PagesComponent,
        children: [
            { path: '', component: DashboardComponent, data: { titulo: 'Dashboard' } },
            { path: 'progress', component: ProgressComponent, data: { titulo: 'Progress' } },
            { path: 'grafica1', component: Grafica1Component, data: { titulo: 'Gráfica 1' } },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
