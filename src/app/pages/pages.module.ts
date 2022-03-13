import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';



@NgModule({
    declarations: [
        DashboardComponent,
        InicioComponent,
        ProgressComponent,
        Grafica1Component,
        PagesComponent,
        AccountSettingsComponent
    ],
    exports: [
        DashboardComponent,
        InicioComponent,
        ProgressComponent,
        Grafica1Component,
        PagesComponent,
        AccountSettingsComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule
    ]
})
export class PagesModule { }
