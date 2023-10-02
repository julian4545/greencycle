import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RutasComponent } from './rutas.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';

const routes: Routes = [
  {
    path: "",
    component: RutasComponent ,
  },
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    NgApexchartsModule
  ]
})
export class RutasModule { }
