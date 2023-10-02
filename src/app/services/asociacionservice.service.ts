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