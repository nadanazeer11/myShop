import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Item } from '../models/Items';
import { SharedService } from '../service/shared.service';
import { cartItem } from '../models/cartItem';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() item:Item;
  quantvar:number=0;
  //cartitem:cartItem;
  constructor(private sharedService:SharedService) { 
  this.item={
    id:0,
    name:'',
    price:0,
    url:'',
    description:'',
    quantity:0,
    total:0
  }
  // this.cartitem={
  //   id:0,
  //   name:'',
  //   price:0,
  //   url:'',
  //   quantity:0,
  //   total:0
  // }

}
  ngOnInit(): void {
  }
  addToCart(item:Item):void{
    let cartitem=new cartItem(item.id,item.name,item.price,item.url,this.quantvar,0);
    console.log(cartitem)
    this.sharedService.addtoCart(cartitem);
    // item.quantity=this.quantvar;
    // this.sharedService.addtoCart(item);
    // this.quantvar=0;
  }
// add(item:Item):void{
//   // alert("Added to cart")
//   this.sharedService.sendClickEvent();
// }private sharedService:SharedService

addq():void{
 
 this.quantvar+=1;

}
minusq():void{
  if(this.quantvar>0){
   this.quantvar-=1;
  }
 
}
}