import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/core/models/product-crud.model';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss']
})
export class ProductUpdateComponent implements OnInit {

  product: Product = new Product();
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private dialogRef: MatDialogRef<ProductUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product,
  ) {
    this.product.id = this.data.id;
    this.product.name = this.data.name;
    this.product.price = this.data.price;
  }

  ngOnInit(): void {
  }

  updateProduct(): void {
    this.productService.update(this.product).subscribe(() => {
      this.productService.showMessage('Produto atualizado com sucesso!');
      this.router.navigate(["/products"])
    });
  }
}
