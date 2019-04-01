import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class SenddataurlService {

  lng: any;

  myMethod$: Observable<any>;
  private myMethodSubject = new Subject<any>();

  constructor() {
      this.myMethod$ = this.myMethodSubject.asObservable();
  }

  myMethod(data) {
      this.lng = data; 
      console.log(data); // I have data! Let's return it so subscribers can use it!
  }


  getLng(){
    return this.lng;
  }


}
