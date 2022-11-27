import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppModule } from '../app.module';
import { MaterialExampleModule } from '../material.module';
import { HeaderComponent } from '../layout/header/header.component';
import { ConfigurationComponent } from './components/configuration/configuration.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductCreateComponent } from './components/products/product-create/product-create.component';
import { ProductUpdateComponent } from './components/products/product-update/product-update.component';
import { ProductDeleteComponent } from './components/products/product-delete/product-delete.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import {MatDialogModule} from '@angular/material/dialog';
import { ProductService } from './services/product.service';
import { ShoppingComponent } from './components/shopping/shopping.component';


@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    ConfigurationComponent,
    CompaniesComponent,
    ProductsComponent,
    ProductCreateComponent,
    ProductDeleteComponent,
    ProductUpdateComponent,
    ShoppingComponent,
  
  ],
  imports: [
    CommonModule,
    MaterialExampleModule,
    FormsModule,    
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,  
    MatDialogModule
   
  ],
  providers: [
  ProductService
],
  entryComponents: [
     ProductCreateComponent, ProductUpdateComponent, ProductDeleteComponent    
  ],
})
export class CoreModule { }
