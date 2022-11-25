import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/app/core/models/product-crud.model';
import { ProductService } from './../../../services/product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.scss']
})
export class ProductDeleteComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Product,
    private productService: ProductService,
    private dialogRef: MatDialogRef<ProductDeleteComponent>,) { }

  ngOnInit(): void {
  }
  deleteProduct(): void {
    this.productService.delete(`${this.data.id}`).subscribe(() => {
      this.productService.showMessage('Produto excluido com sucesso!');
    });
  }
}
