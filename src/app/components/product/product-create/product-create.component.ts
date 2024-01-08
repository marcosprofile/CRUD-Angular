import { Component, OnInit } from '@angular/core';
import { AppMaterialModule } from '../../../app-material.module';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Product } from '../product.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-create',
  standalone: true,
  imports: [ AppMaterialModule ],
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.css'
})


export class ProductCreateComponent implements OnInit {
  product: Product = {
    name: '',
    price: 0
  }

  productForm = new FormGroup({
    name: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
  })

  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Produto criado com sucesso!')
      this.router.navigate(['/products'])
    })
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }
}
