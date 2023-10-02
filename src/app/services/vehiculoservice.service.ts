import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/enviroment";
import { Observable } from "rxjs";
import { vehiculointerface } from "../interfaces";


@Injectable({
  providedIn: "root",
  
})
export class vehiculoservice {
  private apiURL = `${environment.apiUrl}/vehiculo`;

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

  create(association: Association) {
    return this.http.post<{ association: Association; message: string }>(
      `${this.apiURL}/create`,
      association
    );
  }


  delete(id: string) {
    return this.http.delete<{ message: string }>(`${this.apiURL}/remove/${id}`);
  }
  */




}