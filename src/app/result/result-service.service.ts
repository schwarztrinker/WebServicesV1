import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApplicationComponent } from '../application/application.component';
import { SenddataurlService } from '../senddataurl.service';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  lat: any = 53.545013978019476; 
  lng: number = 10.03572012553252; 
  distance: any = 10; 
  driver: any = true; 

  private _url: string = "http://localhost:64320/result/"+ this.lat + "," + this.lng +"/" + this.distance*100 + "/" + this.driver;


  constructor(private http: HttpClient) {
  }



  getData() {
    return this.http.get(this._url);
  }
}
