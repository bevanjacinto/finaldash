import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-top-three-products',
  templateUrl: './top-three-products.component.html',
  styleUrls: ['./top-three-products.component.scss']
})
export class TopThreeProductsComponent implements OnInit{
  
  chart = new Chart({
    chart: {
      type: 'bar',
      height: 225
    },
    title: {
      text: 'Top 3 Products'
    },
    xAxis: {
      categories: [
        'Dell Alienware',
        'Tropicana Orange Juice',
        'Old spice',
      ]
    },
    yAxis: {
      title: {
        text: ''
      }
    },
    series: [
      {
        type: 'bar',
        showInLegend: false,
        data: [
          {
            name: 'Dell Alienware',
            y: 41.0,
            color: 'blue'
          },
          {
            name: 'Tropicana Orange Juice',
            y: 31.0,
            color: 'orange'
          },
          {
            name: 'Old Spice',
            y: 6.5,
            color: 'red'
          },
          
        ]
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
