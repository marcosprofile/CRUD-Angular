import { Component } from '@angular/core';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from '../../views/home/home.component';
import { ProductCrudComponent } from '../../views/product-crud/product-crud.component';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    MatSidenavModule,
    MatListModule,
    HomeComponent,
    ProductCrudComponent,
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent { }
