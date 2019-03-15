import { Component, OnInit } from '@angular/core';
import { packageNonAnimatableStyles } from '@angular/animations/browser/src/render/special_cased_styles';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  
  

  constructor() { 
    
  }

  ngOnInit() {
    console.log("Home");
  }

}
