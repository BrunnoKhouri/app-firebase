import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public goToManagerCompanies() {
    this.router.navigate(['/companies']);
  }

  public goToManagerProducts() {
    this.router.navigate(['/products']);
  }

  public goToManagerShopping() {
    this.router.navigate(['/shopping']);
  }

}
