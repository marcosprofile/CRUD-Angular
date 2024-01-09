import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppMaterialModule } from '../../app-material.module';

import { ProductReadComponent } from '../../components/product/product-read/product-read.component';
import { HeaderService } from '../../services/header.service';


@Component({
  selector: 'app-product-crud',
  standalone: true,
  imports: [ AppMaterialModule, ProductReadComponent ],
  templateUrl: './product-crud.component.html',
  styleUrl: './product-crud.component.css'
})

export class ProductCrudComponent {

  constructor(
    private router: Router,
    private headerService: HeaderService
  ) {
    headerService.headerData = {
      title: 'Produtos',
      icon: 'storefront',
      routeUrl: '/products'
    }
  }

  navigateToProductCreate(): void {
    this.router.navigate(['/products/create']);
  }
}
