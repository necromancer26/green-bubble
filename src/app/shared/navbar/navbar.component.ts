import { Component, OnInit, ElementRef } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit{
  
  ngOnInit(){
        /*--- VSticker ----*/
        $("#news-flash").vTicker({
          speed: 500,
          pause: 3000,
          animation: "fade",
          mousePause: false,
          showItems: 1
      });
  }

}
