import { HttpClient } from '@angular/common/http';
import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { GridComponent } from '@progress/kendo-angular-grid';
import { reciService, recicladorservice } from '../../services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { recicladorinterface } from 'src/app/interfaces';

@Component({
  selector: 'app-recicladores',
  templateUrl: './recicladores.component.html',
  styleUrls: ['./recicladores.component.scss']
})
export class RecicladoresComponent implements OnInit {
  @ViewChild(GridComponent)
  nose: string;
  data: any[] = [];
  formulario: FormGroup;
  miArray: any[] = [];
  miArray1: any[] = [];
  loading = false;

  constructor(
  
    private readonly _reciclador: recicladorservice,
    public modal: NgbModal,
    private fb: FormBuilder,


  ) {
    this.nose = 'This is some text within a card block.';
    this.formulario = this.fb.group({
      id_reciclador: [Validators.required],
      Nombre: ["", Validators.required],
      Apellido: ["", Validators.required],
      CC: ["", Validators.required],
      Departamento: ["", Validators.required],
      telefono: ["", Validators.required],
      correo: ["", Validators.required],
      nacimiento: ["", Validators.required],

    });




  }
 
 
 
  ngOnInit(): void {
   
    this._reciclador.getData().subscribe((result) => {
      this.data = result;
      console.log("Materiales", this.data);
      
    },
    );
   
  }

  open(name: any, id: string) {
    this.modal.open(name);
    this._reciclador.obtenerArrayPorId(id).subscribe(data => {
      this.miArray1 = data;
      console.log('Array obtenido111111:', this.miArray1);
    });

  }



  open1(name1: any,) {
    this.modal.open(name1);
  } 
  
  agregar() {

    console.log('entre');
    const formData: recicladorinterface = this.formulario.value;
    // Llama al método para agregar datos en el servicio y envía los datos del formulario.
    this._reciclador.crear(formData).subscribe(
      (response) => {
        // Maneja la respuesta si es necesario.
        console.log('Datos agregados con éxito', response);
        this.loading = false;
      },
      (error) => {
        this.loading = false;
        // Maneja los errores si es necesario.
        console.error('Error al agregar datos', error);
      }
    );
  }

  actualizar() {

    console.log('entre');
    const formData: recicladorinterface = this.formulario.value;
    // Llama al método para agregar datos en el servicio y envía los datos del formulario.
    this._reciclador.actualizarRegistro(formData).subscribe(
      (response) => {
        // Maneja la respuesta si es necesario.
        console.log('Datos actualizado con éxito', response);
        this.loading = false;
      },
      (error) => {
        this.loading = false;
        // Maneja los errores si es necesario.
        console.error('Error al actualizar datos', error);
      }
    );
  }

  obtenerArrayPorId(id: string) {
    this._reciclador.obtenerArrayPorId(id).subscribe(data => {
      this.miArray = data;
      console.log('Array obtenido:', this.miArray);
    });
  }

  eliminarRegistro(id: string) {
    const confirmacion = window.confirm('¿Estás seguro de que deseas eliminar este registro?');
    if (confirmacion) {
      this._reciclador.eliminarRegistro(id).subscribe(
        (response) => {
          console.log('Registro eliminado con éxito', response);
        },
        (error) => {
          console.error('Error al eliminar registro', error);
        }
      );
    }

  }
 



}
