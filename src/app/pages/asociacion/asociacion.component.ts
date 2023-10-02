import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { GridComponent } from '@progress/kendo-angular-grid';
import { asociacionservice } from '../../services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-asociacion',
  templateUrl: './asociacion.component.html',
  styleUrls: ['./asociacion.component.scss']
})
export class AsociacionComponent implements OnInit {

  @ViewChild(GridComponent)
  nose: string;
  data: any[] = [];
  miArray1:any[] = [];

  constructor(
  
    private readonly _asociacion: asociacionservice,
    public modal:NgbModal,

  ) {
    this.nose = 'This is some text within a card block.';
  }
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
 
 
  ngOnInit(): void {
   
    this._asociacion.getData().subscribe((result) => {
      this.data = result;
      console.log("asociacion", this.data);
      
    },
    );
   
  }


  open(name: any,id: string){
  
    this.modal.open(name);
    /*
    this._vehiculo.obtenerArrayPorId(id).subscribe(data => {
      this.miArray1 = data;
      console.log('Array obtenido111111:', this.miArray1);
      
    });
  */
   }
  
  
   open1(name1: any,){
    
    this.modal.open(name1);
  
   }
 




}
