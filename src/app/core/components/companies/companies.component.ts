import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Companie } from '../../models/companie.model';
import { CompaniesService } from './../../services/companies.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit, AfterViewInit {

  public companies!: Array<Companie>;
  public displayedColumns: string[] = ['position', 'name', 'cnpj'];
  public dataSource = new MatTableDataSource<Companie>(this.companies);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private companieService: CompaniesService,
    private route: Router
  ) { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
    this.getCompanies();
  }

  private getCompanies() {
    try {
      this.companieService.read().subscribe(result => {
        this.dataSource.data = result;
        console.log('companie', this.companies);
        console.log('companiedataSource', this.dataSource);
      });
    } catch (error) {
      console.log(error);
    }

  }

  navigateToHome() {
    this.route.navigate(['/dashboard']);
  }
}
