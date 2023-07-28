import { Component, OnInit } from '@angular/core';
import { faDashboard,faLocation,faShop,faBox,faMoneyBill,faChartBar,faContactBook,faHand } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-top-widgets',
  templateUrl: './top-widgets.component.html',
  styleUrls: ['./top-widgets.component.scss']
})
export class TopWidgetsComponent implements OnInit {
 
  faLocation=faLocation;
  faShop=faShop;
  faBox=faBox;
  faMoneyBill=faMoneyBill;
  constructor() { }
 
  ngOnInit(): void {
    
  }

}
