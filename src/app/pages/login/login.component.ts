import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { loginInterface } from '../../modelos/loginInterface';
import { ApiLoginService } from '../../services/api/api.login.service';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarModule, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { responseLoginInterface } from '../../modelos/responseLoginInterface';
import {MatInputModule} from '@angular/material/input';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatCardModule, MatFormFieldModule, FormsModule, ReactiveFormsModule, MatSnackBarModule,MatInputModule,CommonModule,MatIconModule,MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom'

  constructor(private api: ApiLoginService, private router: Router, private msj: MatSnackBar) { }




  form: FormGroup = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  submit(form: loginInterface) {

    if (form.email && form.password) {
      this.api.loginByEmail(form).subscribe(data => {
        console.log(data);
        let dataResponse: responseLoginInterface = data; // para formar la respuesta y cargarla en pantalla
        if (dataResponse.access_token) {  //almaceno token
          localStorage.removeItem("token");
          localStorage.setItem("token", dataResponse.access_token);

          this.router.navigate(['']); //navega a la pagina de inicio
        }
      },
        error => {
          this.openSnackBar("Usuario sin acceso");
        }
      );

    }
    else {
      this.openSnackBar("Error con datos ingresados");
    }
  }

  //carga mensaje de validacion
  openSnackBar(mensaje: string) {
    this.msj.open(mensaje, 'Importante', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 2000,
    });
  }

  getToken() {
    return localStorage.getItem("token");
  }


}
