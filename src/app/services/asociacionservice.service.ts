import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/enviroment";
import { Observable } from "rxjs";


@Injectable({
  providedIn: "root",
  
})
export class asociacionservice {
  private apiURL = `${environment.apiUrl}/asociacion`;

  constructor(private readonly http: HttpClient) {}

  


  

  getData(): Observable<any> {
    return this.http.get(this.apiURL);
  }
  

  obtenerArrayPorId(id: string) {
    return this.http.get<any>(`${this.apiURL}/pr/${id}`
    );
  }
  /*
  getById(id: string) {
    return this.http.get<any>(`${this.apiURL}/getById/${id}`);
  }
  */

  crear(data: any) : Observable<any> {
   // return this.http.post<{ association: Association; message: string }>(`${this.apiURL}/create`);
   const url = `${this.apiURL}/`;
   return this.http.post(url, data);
  }


  actualizarRegistro(data: any): Observable<any> {
    const url = `${this.apiURL}/`; // Reemplaza 'actualizar' con la ruta de tu backend para actualizar registros
    return this.http.put(url, data);
  }


  delete(id: string) {
    return this.http.delete< any>(`${this.apiURL}/eliminar/${id}`);
  }
  

  eliminarRegistro(id: string): Observable<any> {
    const url = `${this.apiURL}/eliminar/${id}`; // Reemplaza 'eliminar' con la ruta de tu backend para eliminar registros
    return this.http.delete(url);
  }





}