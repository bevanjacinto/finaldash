import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-sales-by-month',
  templateUrl: './sales-by-month.component.html',
  styleUrls: ['./sales-by-month.component.scss']
})
export class SalesByMonthComponent implements OnInit {
 

  chart = new Chart({
    chart: {
      type: 'line',
      height: 325
    },
    title: {
      text: 'Month wise sales'
    },
    xAxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ]
    },
    yAxis: {
      title: {
        text: 'Revenue in $'
      }
    },
    series: [
      {
        name: "Arizona",
        type: 'line',
        data: [70,69,95,145,182,215,252,265,233,183,139,196]
      },
      {
        name: "California",
        type: 'line',
        data: [134,239,195,45,120,116,223,65,147,83,239,296] 
      },
      {
        name: 'Michigan',
        type: 'line',
        data: [96,130,195,234,110,76,123,165,247,189,149,96]
      }
    ],
    credits: {
      enabled: false
    }
  });

  constructor() { }

  ngOnInit(): void {
    
  }

}
