import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit{
  constructor(){

  }
  
ngOnInit(): void {
  window.addEventListener("load", this.adjustTableHeader);
window.addEventListener("resize", this.adjustTableHeader);
}



adjustTableHeader() {
  var tblContent: HTMLElement | null = document.querySelector('.tbl-content');
  var tblTable = tblContent?.querySelector('table'); // Optional chaining
  var scrollWidth = tblTable ? (tblContent as HTMLElement).offsetWidth - tblTable.offsetWidth : 0; // Type assertion
  var tblHeader = document.querySelector('.tbl-header') as HTMLElement; // Type assertion
  if (tblHeader && tblTable) {
    tblHeader.style.paddingRight = scrollWidth + 'px';
  }
}

}
