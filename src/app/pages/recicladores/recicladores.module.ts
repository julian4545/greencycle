import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { NgApexchartsModule } from "ng-apexcharts";
import { RecicladoresComponent } from "./recicladores.component";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";



const routes: Routes = [
  {
    path: "",
    component: RecicladoresComponent ,
  },
];

@NgModule({
  declarations: [
    RecicladoresComponent,
    
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    NgApexchartsModule

    

  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class RecicladoresModule { }
