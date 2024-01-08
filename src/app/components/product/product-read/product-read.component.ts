import { Component, OnInit } from '@angular/core';
import { AppMaterialModule } from '../../../app-material.module';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-product-read',
  standalone: true,
  imports: [
    AppMaterialModule,
    CurrencyPipe,
    RouterLink
  ],
  templateUrl: './product-read.component.html',
  styleUrl: './product-read.component.css'
})

export class ProductReadComponent implements OnInit {
  products: Product[] = []
  displayedColumns = ['id', 'name', 'price', 'action'];

  constructor(private productService: ProductService) {

  }

  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.products = products
      console.log(products)
    })
  }
  
}
