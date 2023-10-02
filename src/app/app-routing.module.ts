import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { RecicladoresComponent } from './pages/recicladores/recicladores.component';
import { VehiculosComponent } from './pages/vehiculos/vehiculos.component';
import { AsociacionComponent } from './pages/asociacion/asociacion.component';
import { RutasComponent } from './pages/rutas/rutas.component';

export const Approutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      
    {path:'reciclador', component: RecicladoresComponent },
    {path:'vehiculo', component: VehiculosComponent  },
    {path:'asociacion', component: AsociacionComponent },
    {path:'rutas-de-recoleccion', component: RutasComponent },

   

    

     
      
    ]
  },
  {
    path: '**',
    redirectTo: '/starter'
  },


];
