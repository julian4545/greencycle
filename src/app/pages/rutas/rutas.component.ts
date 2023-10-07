import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { rutasinterface } from 'src/app/interfaces';
import { reciService } from 'src/app/services';

@Component({
  selector: 'app-rutas',
  templateUrl: './rutas.component.html',
  styleUrls: ['./rutas.component.scss']
})
export class RutasComponent implements OnInit  {
  nose: string;
  data: any[] = [];
  miArray:any[] = [];
  formulario: FormGroup;
  miArray1:any[] = [];
  loading = false;

  
  constructor(
  
    private readonly _ruta: reciService,
    public modal: NgbModal,
    private fb: FormBuilder,
 

  ) {
    this.nose = 'This is some text within a card block.';
    this.formulario = this.fb.group({
      id_rutas: [Validators.required],
      nombreruta: ["", Validators.required],
      kmruta: ["", Validators.required],
      departamento: ["", Validators.required],
      cuidad: ["", Validators.required],
      num_reciclador: ["", Validators.required],
      hora_inicio: ["", Validators.required],
      hora_final: ["", Validators.required],
   
    });
  }
 




  ngOnInit(): void {
   
    this._ruta.getData().subscribe((result) => {
      this.data = result;
      console.log("rutas", this.data);
      
    },
    );
   
  }

  open(name: any, id: string) {
    this.modal.open(name);
    this._ruta.obtenerArrayPorId(id).subscribe(data => {
      this.miArray1 = data;
      console.log('Array obtenido111111:', this.miArray1);
    });

  }

  open1(name1: any,) {
    this.modal.open(name1);
  } 


  agregar() {

    console.log('entre');
    const formData: rutasinterface = this.formulario.value;
    // Llama al método para agregar datos en el servicio y envía los datos del formulario.
    this._ruta.crear(formData).subscribe(
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
    const formData: rutasinterface = this.formulario.value;
    // Llama al método para agregar datos en el servicio y envía los datos del formulario.
    this._ruta.actualizarRegistro(formData).subscribe(
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
    this._ruta.obtenerArrayPorId(id).subscribe(data => {
      this.miArray = data;
      console.log('Array obtenido:', this.miArray);
    });
  }

  eliminarRegistro(id: string) {
    const confirmacion = window.confirm('¿Estás seguro de que deseas eliminar este registro?');
    if (confirmacion) {
      this._ruta.eliminarRegistro(id).subscribe(
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
