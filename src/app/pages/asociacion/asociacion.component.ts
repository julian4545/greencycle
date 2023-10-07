import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { GridComponent } from '@progress/kendo-angular-grid';
import { asociacionservice } from '../../services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { asociacioninterface } from 'src/app/interfaces';

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
  miArray:any[] = [];
  formulario: FormGroup;
  loading = false;


  constructor(
  
    private readonly _asociacion: asociacionservice,
    public modal: NgbModal,
    private fb: FormBuilder

  ) {
    this.nose = 'This is some text within a card block.';
    this.formulario = this.fb.group({
      id_aso: [Validators.required],
      Nombre: ["", Validators.required],
      departamentodeoperacion: ["", Validators.required],
      rut: ["", Validators.required],
      cantidadDeReciclador: ["", Validators.required],
      km_total: ["", Validators.required],
      total_reciclado: ["", Validators.required],
      fecha_creado: ["", Validators.required],
   
    });
  }
 
 
  ngOnInit(): void {
   
    this._asociacion.getData().subscribe((result) => {
      this.data = result;
      console.log("asociacion", this.data);
      
    },
    );
   
  }

  open(name: any, id: string) {
    this.modal.open(name);
    this._asociacion.obtenerArrayPorId(id).subscribe(data => {
      this.miArray1 = data;
      console.log('Array obtenido111111:', this.miArray1);
    });

  }

  open1(name1: any,) {
    this.modal.open(name1);
  } 


  agregar() {

    console.log('entre');
    const formData: asociacioninterface = this.formulario.value;
    // Llama al método para agregar datos en el servicio y envía los datos del formulario.
    this._asociacion.crear(formData).subscribe(
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
    const formData: asociacioninterface = this.formulario.value;
    // Llama al método para agregar datos en el servicio y envía los datos del formulario.
    this._asociacion.actualizarRegistro(formData).subscribe(
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
    this._asociacion.obtenerArrayPorId(id).subscribe(data => {
      this.miArray = data;
      console.log('Array obtenido:', this.miArray);
    });
  }

  eliminarRegistro(id: string) {
    const confirmacion = window.confirm('¿Estás seguro de que deseas eliminar este registro?');
    if (confirmacion) {
      this._asociacion.eliminarRegistro(id).subscribe(
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
