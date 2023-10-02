import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GridComponent, GridDataResult } from '@progress/kendo-angular-grid';
import { vehiculoservice } from '../../services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { SortDescriptor } from '@progress/kendo-data-query';


@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.scss']
})
export class VehiculosComponent implements OnInit {

  @ViewChild(GridComponent)
  nose: string;
  data: any[] = [];
  miArray:any[] = [];
  miArray1:any[] = [];
  




  modalVisible = false;


  constructor(
  
    private readonly _vehiculo: vehiculoservice,
    public modal:NgbModal,
    //private modalService: NgbModal, 
 

  ) {
    this.nose = 'This is some text within a card block.';
  }
 
 
 
  ngOnInit(): void {
   
    this._vehiculo.getData().subscribe((result) => {
      this.data = result;
      console.log("Materiales", this.data);
      
    },
    );
   
  }

 open(name: any,id: string){
  
  this.modal.open(name);
  this._vehiculo.obtenerArrayPorId(id).subscribe(data => {
    this.miArray1 = data;
    console.log('Array obtenido111111:', this.miArray1);
  });

 }


 open1(name1: any,){
  
  this.modal.open(name1);


 }
 
 


  obtenerArrayPorId(id: string) {
    this._vehiculo.obtenerArrayPorId(id).subscribe(data => {
      this.miArray = data;
      console.log('Array obtenido:', this.miArray);
    });
  }




}
