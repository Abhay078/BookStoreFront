import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/UserService/user.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  books:any=[];
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.GetBook();
  }
  GetBook(){
    this.userService.GetAll().subscribe((res)=>{
     console.log(res);
     this.books=res;

    },(error)=>{
     console.log(error);
    })
 }

}
