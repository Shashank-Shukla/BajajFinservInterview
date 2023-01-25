import { Component, OnInit } from '@angular/core';

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
	}

  constructor() { }

  ngOnInit() {
  }

}
