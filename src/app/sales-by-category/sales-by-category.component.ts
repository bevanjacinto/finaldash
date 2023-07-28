import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-sales-by-category',
  templateUrl: './sales-by-category.component.html',
  styleUrls: ['./sales-by-category.component.scss']
})
export class SalesByCategoryComponent implements OnInit{
  

  chart = new Chart({
    chart: {
      type: 'pie',
      height: 325
    },
    title: {
      text: 'Category wise sales'
    },
    xAxis: {
      categories: [
        'Electronics',
        'Groceries',
        'Cosmetics',
        'Clothes',
        'Appliances'
      ]
    },
    yAxis: {
      title: {
        text: 'Revenue in %'
      }
    },
    series: [
      {
        type: 'pie',
        data: [
          {
            name: 'Electronics',
            y: 41.0,
            color: 'red'
          },
          {
            name: 'Groceries',
            y: 31.0,
            color: 'black'
          },
          {
            name: 'Cosmetics',
            y: 6.5,
            color: 'blue'
          },
          {
            name: 'Clothes',
            y: 15.2,
            color: 'green'
          },
          {
            name: 'Appliances',
            y: 3.5,
            color: 'yellow'
          }

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
