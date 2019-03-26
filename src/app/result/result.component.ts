import { Component, OnInit } from '@angular/core';
import { ResultService } from './result-service.service';
import { dashCaseToCamelCase } from '@angular/animations/browser/src/util';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  data: any;
  lat: any;
  lng: any;

  constructor(private provider: ResultService) { }

  ngOnInit() {
    this.provider.getData().subscribe((result: any) => {
      this.data = null;
      this.data = result;   
      
      this.lat = this.data.lng; 
      this.lng = this.data.lat;
    });

    

  }



}
