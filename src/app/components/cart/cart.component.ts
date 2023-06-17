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
Books:any=[];
id:any;
cartbook:any;
quantity:number=1;
flag_address:boolean=false;
flag_summary:boolean=false;
Address:any;
  constructor(private router:Router,private userService:UserService,public snackbar:MatSnackBar,private dataService:DataServiceService) { }

  ngOnInit(): void {
    this.GetAllCart();
    
  }
  GoTodashboard() {
    this.router.navigateByUrl('/dashboard/book')
  }
  GetAllCart(){
   this.userService.GetAllCart().subscribe((res:any)=>{
    console.log(res);
    this.book=res
    this.id=this.book.data[0].bookId;
    this.quantity=this.book.data[0].quantity;
    for(let i=0;i<res.data.length;i++){
      this.GetBookById(res.data[i].bookId);
    }
   
   },(error)=>{
    console.log(error);
   })
  }
  GetBookById(id:any){
     this.userService.GetBook(id).subscribe((res:any)=>{
      console.log(res);
      this.cartbook=res;
      this.Books.push(res.data)
      console.log('books'+ this.Books[0].bookId)
     },(error)=>{
      console.log(error)
     })
  }
  RemoveItem(id:number){
    this.userService.RemoveBookfromCart(id).subscribe((res)=>{
      console.log(res);
      this.snackbar.open('The book is removed from cart','Close')
      window.location.reload();
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
      this.UpdateQuantity(this.quantity,this.id);
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
  Order(id:number){
    
    this.userService.Order(id).subscribe((res:any)=>{
      console.log(res.data);
      this.dataService.sendMessage(res.data.orderId)
      
    })
  }
  UpdateQuantity(quantity:number,bookId:number){
    this.userService.UpdateQuantity(quantity,bookId).subscribe((res)=>{
      console.log(res);
      this.snackbar.open('quantity updated','Close')
    },(error)=>{
      console.log(error);
      this.snackbar.open('unable to update quantity','Close')
    })
  }

}
