import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, Router } from '@angular/router';
import { ApiproductoService } from '../../../services/api/apiproducto.service';
import { mensajeService } from '../../../services/mensaje.service';
import { AddEditProductos } from '../add-edit-productos/add-edit-productos.component';





@Component({
  selector: 'app-list-productos',
  standalone: true,
  imports: [MatButtonModule, MatInputModule, MatTableModule, MatToolbarModule, MatPaginatorModule, MatFormFieldModule, MatIconModule],
  templateUrl: './list-productos.component.html',
  styleUrl: './list-productos.component.css'
})
export class ListProductosComponent implements OnInit {
  ApiproductoService: any;

  ngOnInit() {
    this.getProductosList();
  }

  constructor(
    private _dialog: MatDialog,
    private productoService: ApiproductoService,
    private mensaje: mensajeService,

  ) { }

  getProductosList() {
    this.productoService.getProducto().subscribe({
      next: (res: any[] | undefined) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: console.log,
    });



  }


  displayedColumns: string[] = [
    'id',
    'codigo',
    'descripcion',
    'codigo_barras',
    'referencia',
    'grupo',
    'vr_ult_costo',
    'vr_precio',
    //'ult_compra',
    //'ult_venta',
    'accion'

  ];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  //Abre el formulario para creacion o edicion de productos
  // openAddProdForm(form: ProductoInterface): Observable<ResponseProductoInterface> {

  //   let direccion = this.url + "/productos";
  //   return this.http.post<any>(direccion, form);

  // }

  // openEditProducto(id: BigInteger, form: ProductoInterface): Observable<ResponseProductoInterface> {
  //   let direccion = this.url + "/productos/" + id;
  //   return this.http.put<any>(direccion, form);
  // }

  openAddProdForm() {
    const dialogRef = this._dialog.open(AddEditProductos);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getProductosList();
        }
      },
    });
  }


  openEditProducto(data: any) {
    const dialogRef = this._dialog.open(AddEditProductos, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getProductosList();
        }
      },
    });
  }




  deleteProducto(id: BigInteger) {

    this.productoService.deleteProducto(id).subscribe({
      next: (res) => {
        this.mensaje.openSnackBar("Registro Eliminado");
        this.getProductosList();
      },
      error: console.log,
    });
  }

  //paginacion
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
