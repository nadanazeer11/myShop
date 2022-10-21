import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { det } from '../models/confDetails';
import { SharedService } from '../service/shared.service';
@Component({
  selector: 'app-confirmation-page',
  templateUrl: './confirmation-page.component.html',
  styleUrls: ['./confirmation-page.component.css']
})
export class ConfirmationPageComponent implements OnInit {
public details:det;
public d:det;
  constructor(private sharedService:SharedService) {
    this.details={
      name:'',
      price:0
    }
    this.d=this.sharedService.getDet();
    console.log("a",this.d)
   }

  ngOnInit(): void {
    this.details=this.sharedService.getDet();
    console.log("hi",this.details);
  }

}
