import { Component, OnInit } from '@angular/core';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

import { HttpClient } from '@angular/common/http';



declare var google: any;


@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})




export class ApplicationComponent implements OnInit {

  title: string = 'My first AGM project';
  lat: number = 49.3544849319785;
  lng: number = 9.150533080101013;
  locationChosen: boolean = false;

  city : any;

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

  onChoseLocation(event: any){
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
    this.locationChosen = true;

    

    console.log(this.city);


  }




  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

}
