import { HttpClient } from '@angular/common/http';
import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { GridComponent } from '@progress/kendo-angular-grid';
import { reciService, recicladorservice } from '../../services';

@Component({
  selector: 'app-recicladores',
  templateUrl: './recicladores.component.html',
  styleUrls: ['./recicladores.component.scss']
})
export class RecicladoresComponent implements OnInit,AfterViewInit {
  @ViewChild(GridComponent)
  nose: string;
  data: any[] = [];

  constructor(
  
    private readonly _reciclador: recicladorservice,


  ) {
    this.nose = 'This is some text within a card block.';
  }
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
 
 
  ngOnInit(): void {
   
    this._reciclador.getData().subscribe((result) => {
      this.data = result;
      console.log("Materiales", this.data);
      
    },
    );
   
  }
 



}
