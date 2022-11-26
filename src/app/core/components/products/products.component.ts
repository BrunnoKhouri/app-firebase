import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Product } from '../../models/product-crud.model';
import { ProductService } from './../../services/product.service';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductDeleteComponent } from './product-delete/product-delete.component';
import { ProductUpdateComponent } from './product-update/product-update.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products!: Product[];
  displayedColumns = ['id', 'name', 'price', 'action'];

  constructor(
    private productCrudService: ProductService,
    private dialog: MatDialog,
    private route: Router) { }

  ngOnInit(): void {
    this.tableLoading();
  }

  private tableLoading(): void {
    this.productCrudService.read().subscribe(products => {
      this.products = products;
    });
  }
  navigateToProductUpdate(productsUpdate: Product): void {
    const dialogRef = this.dialog.open(ProductUpdateComponent, {
      width: '700px',
      data: productsUpdate,
      panelClass: "backDialog"
    });
    dialogRef.afterClosed().subscribe((mustUpdate) => {
      (mustUpdate)
      this.tableLoading();
    });
  }

  navigateToProductDelete(prodcutDelete: Product): void {
    const dialogRef = this.dialog.open(ProductDeleteComponent, {
      width: '800px',
      data: prodcutDelete,      
      panelClass: "backDialog"
    });
    dialogRef.afterClosed().subscribe((mustUpdate) => {
      (mustUpdate)
      this.tableLoading();
    });
  }

  navigateToProductCreate(enterAnimationDuration: string, exitAnimationDuration: string): void {
    const dialogRef = this.dialog.open(ProductCreateComponent, {
      width: '700px',
      enterAnimationDuration,
      exitAnimationDuration,
      panelClass: "backDialog"
    });
    dialogRef.afterClosed().subscribe((mustUpdate) => {
      (mustUpdate)
      this.tableLoading();
    });
  }

  navigateToHome() {
    this.route.navigate(['/dashboard']);
  }
}
