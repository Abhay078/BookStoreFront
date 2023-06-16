import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/UserService/user.service';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-display-book',
  templateUrl: './display-book.component.html',
  styleUrls: ['./display-book.component.scss']
})
export class DisplayBookComponent implements OnInit {
  @Input() AllBook: any
  Search:any;
  constructor(private router:Router,private dataService:DataServiceService) { }
  
  ngOnInit(): void {
    this.dataService.currentMessage.subscribe((res:any)=>{
      this.Search=res;
      console.log(res)
    })
  }
  
  RouteToBookDetail(book:any){
    console.log(book)
    this.dataService.sendMessage(book)
    this.router.navigateByUrl('/dashboard/bookdetail')
  }

}
