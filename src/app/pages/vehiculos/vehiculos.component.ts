import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GridComponent, GridDataResult } from '@progress/kendo-angular-grid';
import { vehiculoservice } from '../../services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { vehiculointerface } from 'src/app/interfaces';



@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.scss']
})
export class VehiculosComponent implements OnInit {

  @ViewChild(GridComponent)

  nose: string;
  data: any[] = [];
  miArray: any[] = [];
  miArray1: any[] = [];
  modalVisible = false;
  formulario: FormGroup;
  loading = false;

  constructor(

    private readonly _vehiculo: vehiculoservice,
    public modal: NgbModal,
    private fb: FormBuilder,

  ) {
    this.nose = 'This is some text within a card block.';
    this.formulario = this.fb.group({
      id_vehiculo: [Validators.required],
      placa_vehiculo: ["", Validators.required],
      conductor_vehiculo: ["", Validators.required],
      color_vehiculo: ["", Validators.required],
      marca_vehiculo: ["", Validators.required],
      tipo_vehiculo: ["", Validators.required],
      modelo_vehiculo: ["", Validators.required],
      num_pasajeros_vehiculo: ["", Validators.required],
      num_ruedas_vehiculo: ["", Validators.required],
      anno_vehiculo: ["", Validators.required],
    });

  }

  ngOnInit(): void {
    this._vehiculo.getData().subscribe((result) => {
      this.data = result;
      console.log("Materiales", this.data);
    },
    );

  }

  open(name: any, id: string) {
    this.modal.open(name);
    this._vehiculo.obtenerArrayPorId(id).subscribe(data => {
      this.miArray1 = data;
      console.log('Array obtenido111111:', this.miArray1);
    });

  }

  open1(name1: any,) {
    this.modal.open(name1);
  } 


  agregar() {

    console.log('entre');
    const formData: vehiculointerface = this.formulario.value;
    // Llama al método para agregar datos en el servicio y envía los datos del formulario.
    this._vehiculo.crear(formData).subscribe(
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
    const formData: vehiculointerface = this.formulario.value;
    // Llama al método para agregar datos en el servicio y envía los datos del formulario.
    this._vehiculo.actualizarRegistro(formData).subscribe(
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
    this._vehiculo.obtenerArrayPorId(id).subscribe(data => {
      this.miArray = data;
      console.log('Array obtenido:', this.miArray);
    });
  }

  eliminarRegistro(id: string) {
    const confirmacion = window.confirm('¿Estás seguro de que deseas eliminar este registro?');
    if (confirmacion) {
      this._vehiculo.eliminarRegistro(id).subscribe(
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