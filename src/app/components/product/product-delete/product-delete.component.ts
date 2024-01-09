import { Component } from '@angular/core';
import { AppMaterialModule } from '../../../app-material.module';
import { ProductService } from '../../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-product-delete',
  standalone: true,
  imports: [ AppMaterialModule ],
  templateUrl: './product-delete.component.html',
  styleUrl: './product-delete.component.css'
})
export class ProductDeleteComponent {
  product: Product = {
    name: '',
    price: 0
  };

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id !== null) {
      this.productService.readById(+id).subscribe(product => {
        this.product = product;
      })
    }
  }

  deleteProduct(): void {
    if (this.product.id !== undefined && !isNaN(this.product.id)) {
      this.productService.delete(this.product.id).subscribe(() => {
        this.productService.showMessage('Produto excluído com sucesso!')
        this.router.navigate(['/products'])
      })
    }
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }
}
