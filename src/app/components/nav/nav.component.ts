import { Component } from '@angular/core';

import { HomeComponent } from '../../views/home/home.component';
import { ProductCrudComponent } from '../../views/product-crud/product-crud.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AppMaterialModule } from '../../app-material.module';


@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    AppMaterialModule,
    HomeComponent,
    ProductCrudComponent
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent { }
