import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  OrderId:number | undefined;
  constructor(private dataService:DataServiceService) { }

  ngOnInit(): void {
    this.dataService.currentMessage.subscribe((res: any) => {
      this.OrderId = res;
      console.log(res)
  })

}
}
