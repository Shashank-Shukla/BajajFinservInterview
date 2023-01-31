import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ITableElement } from 'src/app/Interfaces/ITableElement';

@Component({
  selector: 'app-Dashboard',
  templateUrl: './Dashboard.component.html',
  styleUrls: ['./Dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  columnChartOptions = {
	  title: {
		  text: "Bar chart using ChartJS"
	  },
	  animationEnabled: true,
	  axisY: {
		  includeZero: true
	  },
	  data: [{
      type: "column", //change type to bar, line, area, pie, etc
      //indexLabel: "{y}", //Shows y value on all Data Points
      indexLabelFontColor: "#5A5757",
      dataPoints: [
        { x: 10, y: 71 },
        { x: 20, y: 55 },
        { x: 30, y: 50 },
        { x: 40, y: 65 },
        { x: 50, y: 71 },
        { x: 60, y: 92, indexLabel: "Highest\u2191" },
        { x: 70, y: 68 },
        { x: 80, y: 10, indexLabel: "Lowest\u2193"  },
        { x: 90, y: 54 },
        { x: 100, y: 60 }
      ]
	  }]
	};

  pieChartOptions = {
	  animationEnabled: true,
	  title:{
		text: "Pie chart using ChartJS - Labour chart"
	  },
	  data: [{
      type: "doughnut",
      yValueFormatString: "#,###.##'%'",
      indexLabel: "{name}",
      dataPoints: [
        { y: 28, name: "Labour" },
        { y: 10, name: "Legal" },
        { y: 20, name: "Production" },
        { y: 15, name: "License" },
        { y: 23, name: "Facilities" },
        { y: 17, name: "Taxes" },
        { y: 12, name: "Insurance" }
      ]
	  }]
	};

  ELEMENT_DATA: ITableElement[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  ];

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // dSource = new MatTableDataSource(this.ELEMENT_DATA);
  dSource = this.ELEMENT_DATA;

  switchStatus: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  FlipSwitch(){
    this.switchStatus = !this.switchStatus;
  }

  // ApplyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dSource.filter = filterValue.trim().toLowerCase();
  // }

}
