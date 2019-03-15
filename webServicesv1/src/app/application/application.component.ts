import { Component, OnInit } from '@angular/core';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})




export class ApplicationComponent implements OnInit {

  title: string = 'My first AGM project';
  lat: number = 50.678418;
  lng: number = 7.809007;


  value = 0; 
  buttonValue = 'no';

  onInputChange(event: any) {
    this.value = event.value;
  }

  onInputChangeButton(event: any) {
    if(this.buttonValue == 'no'){
      this.buttonValue = 'yes'
    }
    else{this.buttonValue = 'no'}
  }




  constructor() { }

  ngOnInit() {
  }

}
