import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  CommonModule, LocationStrategy,
  PathLocationStrategy
} from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FullComponent } from './layouts/full/full.component';


import { NavigationComponent } from './shared/header/navigation.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

import { Approutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpinnerComponent } from './shared/spinner.component';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { ExcelExportModule } from '@progress/kendo-angular-excel-export';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { RecicladoresModule } from './pages/recicladores/recicladores.module';
import { VehiculosModule } from './pages/vehiculos/vehiculos.module';
import { AsociacionModule } from './pages/asociacion/asociacion.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { GridModule } from '@progress/kendo-angular-grid';
import { RutasComponent } from './pages/rutas/rutas.component';
import { RutasModule } from './pages/rutas/rutas.module';











@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    RutasComponent,

  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot(Approutes, { useHash: false }),
    FullComponent,
    NavigationComponent,
    SidebarComponent,
    InputsModule,
    DateInputsModule,
    TreeViewModule,
    ExcelExportModule,
    LayoutModule,
    RecicladoresModule,
    VehiculosModule,
    AsociacionModule,
    NgxDatatableModule,
    DropDownsModule,
    GridModule,
    
    RutasModule
    

  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
