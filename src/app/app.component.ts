import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet ,RouterLink } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatSidenavModule, MatToolbarModule, MatListModule, MatIconModule, MatButtonModule,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor  ( private router:Router ){}
  title = 'inventapp-front';

  links = [
    {
      name: "Productos",
      key: "shop"
    },
    {
      name: "Almacenes",
      key: "storage"

    },
    {
      name: "Grupos Productos",
      key: "groups"

    },
    {
      name: "Transacciones",
      key: "money"

    }
  ]

  OnNavega(item: string) {
    //navega a la pagina de inicio

    switch (item) {
      case 'login':
        localStorage.removeItem("token");
        this.router.navigate([{ outlets: { Login: ['login'] } }]);

        break;
        case 'shop':
          this.router.navigate([{outlets: {Board: ['productos']}}]);
          break;
      }
    }

    getToken() {
      return localStorage.getItem("token");
    }

  }




