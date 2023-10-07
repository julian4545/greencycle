import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/enviroment";
import { Observable } from "rxjs";


@Injectable({
  providedIn: "root",
  
})
export class dashboardservice {
  private apiURL1 = `${environment.apiUrl}/reciclador`;
  private apiURL2 = `${environment.apiUrl}/vehiculo`;
  private apiURL3 = `${environment.apiUrl}/ruta`;
  private apiURL4 = `${environment.apiUrl}/asociacion`;

  constructor(private readonly http: HttpClient) {}

  


  

  getDatareciclador(): Observable<any> {
    return this.http.get(this.apiURL1);
  }
  
  getDatavehiculo(): Observable<any> {
    return this.http.get(this.apiURL2);
  }
  
  getDatarutas(): Observable<any> {
    return this.http.get(this.apiURL3);
  }
  
  getDataasociaciones(): Observable<any> {
    return this.http.get(this.apiURL4);
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