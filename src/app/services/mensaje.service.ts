import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition }from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class mensajeService {
  horizontalPosition: MatSnackBarHorizontalPosition ='center';
  verticalPosition: MatSnackBarVerticalPosition ='bottom'

  constructor(private msj: MatSnackBar){}
//carga mensaje de validacion
openSnackBar( mensaje: string) {
  this.msj.open(mensaje, 'Importante', {
    horizontalPosition: this.horizontalPosition,
    verticalPosition: this.verticalPosition,
    duration: 2000,
  });
}
}
