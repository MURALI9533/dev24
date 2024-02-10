import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit{
  responseData: any = [{"productCode":"Test1001","productName":"Test","productDescription":"Test","productQuantity":10,"productPrice":123},{"productCode":"Test1002","productName":"Test2","productDescription":"Test","productQuantity":100,"productPrice":13},{"productCode":"Test1003","productName":"Test3","productDescription":"Test3","productQuantity":1000,"productPrice":133}];

  constructor(public dataservice:DataService) { }

  ngOnInit(): void {
     //this.loadData();
  }

  loadData(){

    this.dataservice.fetchinventoryData('inventory').subscribe(
      (response:any) => {
        this.responseData = response;
        console.log('data received:', response);
      },
      (error) => {
        console.error('error fetching data:', error);
      }
    );
  }

}
