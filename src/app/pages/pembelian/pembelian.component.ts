import { Component, OnInit } from '@angular/core';

declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: 'app-pembelian',
  templateUrl: './pembelian.component.html',
  styleUrls: ['./pembelian.component.css']
})
export class PembelianComponent implements OnInit {

  public tableData1: TableData;
  ngOnInit(){
      this.tableData1 = {
          headerRow: [ 'ID', 'Name', 'Country', 'City', 'Salary'],
          dataRows: [
              ['1', 'Dakota Rice', 'Niger', 'Oud-Turnhout', '$36,738'],
              ['2', 'Minerva Hooper', 'Curaçao', 'Sinaai-Waas', '$23,789'],
              ['3', 'Sage Rodriguez', 'Netherlands', 'Baileux', '$56,142']
          ]
      };
  }
  constructor() { }
}
