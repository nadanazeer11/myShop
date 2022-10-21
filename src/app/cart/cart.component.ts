import { Component, OnInit } from '@angular/core';
import { Item } from '../models/Items';
import { SharedService } from '../service/shared.service';
import { cartItem } from '../models/cartItem';
import { det } from '../models/confDetails';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public products:cartItem[]=[];
  public totalPrice:number=0;
  public name:string='';
  public address:string='';
  public creditCardNum:string='';
  public isShowB:boolean=false;
  public totalP:number=0;
  public details:det;
  constructor(private sharedService:SharedService) {
    this.totalP=this.sharedService.getTotalPrice();
    this.details={
      name:'',
      price:0
    }
   }

  ngOnInit(): void {
    // this.sharedService.getProducts().subscribe
    // (res=>{
    //   this.products=res;
    //   this.totalPrice=this.sharedService.getTotalPrice();
    // })
   this.products= this.sharedService.getProducts()
   this.totalPrice=this.sharedService.getTotalPrice();
  }
  addq(i:cartItem):void{
    this.sharedService.cartPlus(i);
    this.totalP=this.sharedService.getTotalPrice();
  }
  decq(i:cartItem):void{
    this.isShowB=this.sharedService.cartMinus(i);
    this.totalP=this.sharedService.getTotalPrice();
  }
 
  submitForm():void{
    this.details.name=this.name;
    this.details.price=this.totalP;
    console.log("cart",this.details);
    this.sharedService.setDet(this.details);
   
  }
  
}
