import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['name', 'email', 'birthday', 'gender', 'status'];
  dataSource = new MatTableDataSource();
  details: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getData();
  }

  getData(): void {
    this.dataService.data.subscribe(response => {
      this.details = response;
      this.dataSource.data = this.details;
    });
  }

}
