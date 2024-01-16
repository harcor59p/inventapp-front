import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductoInterface } from '../../modelos/producto-interface';
import { ResponseProductoInterface } from '../../modelos/response-producto-interface';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiproductoService {
  Producto(id: Uint8Array, value: any) {
    throw new Error('Method not implemented.');
  }
  url: string = "https://inventapp.diplomadoisucomfamiliar.net/api";
  constructor(private http: HttpClient) { }

  /* método para listar todas las personas*/
  getProducto(): Observable<any> {
    let direccion = this.url + "/productos";
    return this.http.get(direccion);
  }

  addProducto(form: ProductoInterface): Observable<ResponseProductoInterface> {
    let direccion = this.url + "/productos";
    return this.http.post<ResponseProductoInterface>(direccion, form);
  }

  editProducto(id: BigInteger, form: ProductoInterface): Observable<ResponseProductoInterface> {
    let direccion = this.url + "/productos/" + id;
    return this.http.put<ResponseProductoInterface>(direccion, form);
  }

  deleteProducto(id: BigInteger): Observable<any> {
    let direccion = this.url + "/productos/" + id;
    return this.http.delete(direccion);
  }

}
