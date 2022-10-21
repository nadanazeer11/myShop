import { Component, OnInit } from '@angular/core';
import { Item } from '../models/Items';
import { SharedService } from '../service/shared.service';
import { cartItem } from '../models/cartItem';
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
  constructor(private sharedService:SharedService) { }

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
  }
  decq(i:cartItem):void{
    console.log("aaaa");
    console.log(i);
    this.sharedService.cartMinus(i);
  }
}
