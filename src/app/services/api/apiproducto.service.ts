import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiproductoService {
  url:string="https://inventapp.diplomadoisucomfamiliar.net/api";
  constructor(private http:HttpClient) { }

  /* método para listar todas las personas*/
  getProducto():Observable<any>
  {
    let direccion =this.url+ "/productos";
    return this.http.get(direccion);
  }

  deleteProducto(id: BigInteger): Observable<any> {
    let direccion =this.url+ "/productos/" + id;
    return this.http.delete(direccion);
  }

}
