import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../HttpServices/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  tokenValue: any;


  constructor(private httpService: HttpService) {
    this.tokenValue = localStorage.getItem('token')
  }
  registration(data: {}) {
    let headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.httpService.postMethod('User/', data, false, headers)
  }
  login(data: {}) {
    let headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.httpService.postMethod('User/Login', data, false, headers)
  }
  GetAll() {
    let headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.tokenValue
      })
    }
    return this.httpService.getMethod('Book', true, headers)
  }
  AddToCart(data: {}) {
    let headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.tokenValue
      })
    }
    return this.httpService.postMethod('Cart', data, true, headers);
  }
  GetAllCart() {
    let headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.tokenValue
      })
    }
    return this.httpService.getMethod('Cart', true, headers)
  }
  GetBook(id: number) {
    let headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.tokenValue
      })
    }
    return this.httpService.getMethod(`Book/Bookid?Bookid=${id}`, true, headers)
  }
  RemoveBookfromCart(id:number) {
    let headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.tokenValue
      })

    }
    return this.httpService.deleteMethod(`Cart/BookId?BookId=${id}`, true, headers)
  }
  GetAllWishItem(){
    let headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.tokenValue
      })
    }
    return this.httpService.getMethod('WishList',true,headers)
  }
  AddToWishList(id:number){
    let headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.tokenValue
      })
    }
    return this.httpService.postMethod(`WishList/BookId?BookId=${id}`,{},true,headers)
  }
  RemoveWishItem(id:number){
    let headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.tokenValue
      })
    }
    return this.httpService.deleteMethod(`WishList/BookId?BookId=${id}`,true,headers)
  }
  GetAddress(){
    let headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.tokenValue
      })
    }
    return this.httpService.getMethod('User',true,headers);
  }
  UpdateAddress(data:any,id:number){
    let headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.tokenValue
      })
    }
    return this.httpService.putMethod(`User/AddressId?AddressId=${id}`,data,true,headers)
  }
}
