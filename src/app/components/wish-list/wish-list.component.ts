import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/UserService/user.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit {

  constructor(private userService:UserService,private router:Router,public snackbar:MatSnackBar) { }
  WishBookEntities:any=[];
  WishBookIds:any=[];
  Books:any=[];
  ngOnInit(): void {
    this.GetAllWishItems();
  }
  GoTodashboard(){
    this.router.navigateByUrl('/dashboard/book')
  }
  GetAllWishItems(){
    this.userService.GetAllWishItem().subscribe((res:any)=>{
      for(let i=0;i<res.data.length;i++){
        this.RetriveBook(res.data[i].bookId);
      }
      // console.log(res.data[0].bookId);
      
      
    })
    
  }
  RetriveBook(id:number){
      this.userService.GetBook(id).subscribe((res:any)=>{
        
        this.Books.push(res.data)
        console.log(this.Books);
      })
  }
  RemoveWishItem(id:number){
    this.userService.RemoveWishItem(id).subscribe((res)=>{
      console.log(res);
      this.snackbar.open('Removed Successfully','Close')
      window.location.reload();
    },(error)=>{
      console.log(error);
      this.snackbar.open('Unable to remove','Close')
    })
  }
  

}
