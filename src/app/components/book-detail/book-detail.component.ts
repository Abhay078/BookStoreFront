import { Component, DoCheck, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/UserService/user.service';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit,DoCheck {
  book: any;
  quantity:number=1;
  constructor(private dataService: DataServiceService, private router: Router, private userService: UserService, public _snackbar: MatSnackBar) { }
  flag:boolean=false;
  ngOnInit(): void {
    this.dataService.currentMessage.subscribe((res: any) => {
      this.book = res;
      console.log(res)
    })
  }
  GoTodashboard() {
    this.router.navigateByUrl('/dashboard/book')
  }
  AddToCart(id: number) {
    this.flag=true;
    let data = {
      "quantity": 1,
      "bookId": id
    }
    this.userService.AddToCart(data).subscribe((res) => {
      console.log(res);
      this._snackbar.open('Book Added to cart', 'Close')
    }, (error) => {
      console.log(error);
      this._snackbar.open('unable to add book', 'Close')
    })
  }
  AddToWishList(id:number){
 this.userService.AddToWishList(id).subscribe((res)=>{
  console.log(res);
  this._snackbar.open('Book Added to wishlist', 'Close')
 },(error)=>{
  console.log(error);
  this._snackbar.open('unable to add book to wishlist', 'Close')
 })
  }
  ngDoCheck(){
    console.log(this.quantity);
    this.UpdateQuantity(this.quantity,this.book.bookId)
  }
  UpdateQuantity(quantity:number,bookId:number){
    this.userService.UpdateQuantity(quantity,bookId).subscribe((res)=>{
      console.log(res);
      this._snackbar.open('quantity updated','Close')
    },(error)=>{
      console.log(error);
      this._snackbar.open('unable to update quantity','Close')
    })
  }


}
