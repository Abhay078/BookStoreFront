import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/UserService/user.service';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
book:any=[];
id:any;
cartbook:any;
flag_address:boolean=false;
flag_summary:boolean=false;
Address:any;
  constructor(private router:Router,private userService:UserService,public snackbar:MatSnackBar) { }

  ngOnInit(): void {
    this.GetAllCart();
    
  }
  GoTodashboard() {
    this.router.navigateByUrl('/dashboard/book')
  }
  GetAllCart(){
   this.userService.GetAllCart().subscribe((res)=>{
    console.log(res);
    this.book=res
    this.id=this.book.data[0].bookId
    


   },(error)=>{
    console.log(error);
   })
  }
  GetBookById(id:any){
     this.userService.GetBook(id).subscribe((res)=>{
      console.log(res);
      this.cartbook=res;
     },(error)=>{
      console.log(error)
     })
  }
  RemoveItem(id:number){
    this.userService.RemoveBookfromCart(id).subscribe((res)=>{
      console.log(res);
      this.snackbar.open('The book is removed from cart','Close')
    },(error)=>{
      console.log(error);
      this.snackbar.open('Unable to remove book','Close')
    })
  }
  GetAddress(){
    this.flag_address=!this.flag_address;
    this.userService.GetAddress().subscribe((res:any)=>{
      console.log(res.data);
      this.Address=res.data;
    })
  }
  update(){
    this.flag_summary=!this.flag_summary
    let data={
      "address": this.Address.address,
      "city": this.Address.city,
      "state": this.Address.state,
      "type": "home"
    }
    this.userService.UpdateAddress(data,this.Address.addressId).subscribe((res)=>{
      console.log(res);
    })
  }

}
