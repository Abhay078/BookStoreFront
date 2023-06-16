import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private dataService:DataServiceService) { }

  ngOnInit(): void {
  }
  searchNote(event:any){
    console.log(event.target.value)
    this.dataService.sendMessage(event.target.value)
  }
  logout(){
    localStorage.clear();
    window.location.href='/login';
  }

}
