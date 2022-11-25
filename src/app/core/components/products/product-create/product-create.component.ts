import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/core/models/product-crud.model';
import { ProductService } from './../../../services/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {

  productForm: FormGroup = this.fb.group({
    name: this.fb.control('', [Validators.required]),
    price: this.fb.control('', [Validators.required])
  });;
  constructor(private fb: FormBuilder, private productCrudService: ProductService, private router: Router) { }

  ngOnInit(): void {
  }
  createProduct(): void {
    let cmd: Product = {
      name: this.productForm.value.name,
      price: this.productForm.value.price
    }
    this.productCrudService.create(cmd).subscribe(() => {
      this.productCrudService.showMessage('Produto criado !!');
    })
  }

  cancelProduct(): void {
    this.router.navigate(['/products'])
  }

}
