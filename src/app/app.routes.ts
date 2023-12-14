import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ListProductosComponent } from './pages/productos/list-productos/list-productos.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    outlet:'Login',
  },
  // {
  //   path: '*',
  //   component: CualquierComponent,
  //   outlet:'Board',
  // },
  {
    path: '',
    component: LoginComponent,
    outlet:'Login',
  },
  {
    path: 'productos',
    component: ListProductosComponent,
    outlet:'Board',
  },
];
