import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'dev24';
  random_class = ["#557E92","#15C0C7","#E36B6C","#917979","#80BB61","#F5AD25","#66A8D8","#A367A5","#787BD8","#E5BA5B","#CD6667","#336799","#0EAD99","#CD9967","#B13F73"];
ngOnInit(): void {
  document.documentElement.style.setProperty('--theme-clr', this.random_class[Math.floor(Math.random() * this.random_class.length)]);
}
}
