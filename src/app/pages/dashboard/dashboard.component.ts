import { AfterViewInit, Component, OnInit, ViewChild,  } from '@angular/core';
import { dashboardservice, reciService } from '../../services';

import {
  GridComponent,
  
} from "@progress/kendo-angular-grid";
//declare var require: any;

@Component({
  templateUrl: './dashboard.component.html'
})

export class DashboardComponent implements OnInit, AfterViewInit {

  @ViewChild(GridComponent)
  

  nose: string;
  data: any[] = [];
  miArray1:any[] = [];
  totalRegistros: any;
  registros: any;
  vehiculo: any;
  rutas: any;
  asociacion: any;



  constructor(
  
    private readonly _recilado: dashboardservice,
   


  ) {
    this.nose = 'This is some text within a card block.';
  }
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
   
    this._recilado.getDatareciclador().subscribe((result) => {
      this.registros = result;
      console.log("recilador", this.registros);
    },
    );


    this._recilado.getDatavehiculo().subscribe((result) => {
      this.vehiculo = result;
      console.log("vehiculo", this.data);
      
    },
    );

    this._recilado.getDatarutas().subscribe((result) => {
      this.rutas = result;
      console.log("rutas", this.data);
      
    },
    );
    this._recilado.getDataasociaciones().subscribe((result) => {
      this.asociacion = result;
      console.log("asocion", this.data);
      
    },
    );


   
  }


}
