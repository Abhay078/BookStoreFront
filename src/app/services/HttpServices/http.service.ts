import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseUrl:string=environment.baseUrl;
  constructor(private http:HttpClient) { }
  postMethod(url: string, payload: {}, token: boolean, httpOption: any) {
    return this.http.post(this.baseUrl+url, payload, token && httpOption)
  }
  getMethod(url:string,token:boolean,httpOption:any){
    return this.http.get(this.baseUrl+url,token && httpOption)
  }
  putMethod(url:string,payload:{},token:boolean,httpOption:any){
    return this.http.put(this.baseUrl+url,payload,token && httpOption)
  }
  deleteMethod(url:string,token:boolean,httpOption:any){
    return this.http.delete(this.baseUrl+url,token && httpOption)
  }
}
