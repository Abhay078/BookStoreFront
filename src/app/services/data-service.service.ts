import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  public sharedData:any;
  private messageSource = new BehaviorSubject('');
  currentMessage = this.messageSource.asObservable();

  constructor() { }
  send(message:any){
    this.sharedData=message;
    localStorage.setItem('sharedData',this.sharedData);
  }

  sendMessage(message: string) {
    this.messageSource.next(message)
  }
}
