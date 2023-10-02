import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { reciService } from 'src/app/services';

@Component({
  selector: 'app-rutas',
  templateUrl: './rutas.component.html',
  styleUrls: ['./rutas.component.scss']
})
export class RutasComponent {
  nose: string;
  data: any[] = [];
  miArray:any[] = [];
  miArray1:any[] = [];

  
  constructor(
  
    private readonly _ruta: reciService,
    public modal:NgbModal,
    //private modalService: NgbModal, 
 

  ) {
    this.nose = 'This is some text within a card block.';
  }
 




  ngOnInit(): void {
   
    this._ruta.getData().subscribe((result) => {
      this.data = result;
      console.log("rutas", this.data);
      
    },
    );
   
  }
  open(name: any,id: string){
  
    this.modal.open(name);
    /*
    this._ruta.obtenerArrayPorId(id).subscribe(data => {
      this.miArray1 = data;
      console.log('Array obtenido111111:', this.miArray1);
    });
  */
   }


  
  
   open1(name1: any,){
    
    this.modal.open(name1);
  
  
   }
}
