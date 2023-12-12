import { Injectable } from '@angular/core';
import { loginInterface } from '../../modelos/loginInterface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { responseLoginInterface } from '../../modelos/responseLoginInterface';

@Injectable({
  providedIn: 'root'
})
export class ApiLoginService {

url:string ="https://inventapp.diplomadoisucomfamiliar.net/api";
//url:string="https://backend-laravel.diplomadoisucomfamiliar.net/api";
constructor(private http:HttpClient) { }


  loginByEmail(form:loginInterface):Observable<responseLoginInterface>
  {
     let direccion =this.url+ "/login";
     return this.http.post<responseLoginInterface>(direccion,form);
  }
}
