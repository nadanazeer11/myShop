import { Injectable } from '@angular/core';
import { Observable, Subject,BehaviorSubject} from 'rxjs';
import { Item } from '../models/Items';
import { cartItem } from '../models/cartItem';
@Injectable({
  providedIn: 'root'
})
export class SharedService {

// public cartItemList:Item []=[];
 public productList=new BehaviorSubject<Item []>([]);
public cartList:cartItem[]=[];
constructor(){}
getProducts(){
  return this.cartList;
}
// setProduct(product:Item){
//   this.cartItemList.push(product);
//   // this.productList.next(product[]);
// }
addtoCart(item:cartItem){
  // var boolean=false;
  // for(var p of this.cartItemList){
  //   if(p.id==item.id){
  //     p.quantity+=item.quantity;
  //     p.total=p.price*p.quantity;
  //     boolean=true;
  //   }
  // }
  // if(boolean==false){
  //   item.total=item.price;
  //   this.cartItemList.push(item)
  //   this.productList.next(this.cartItemList);
  //   this.getTotalPrice();
  // }
  // console.log("hey")
  // console.log(this.cartItemList);
  var boolean=false;
  for(var i of this.cartList){
    if(i.id==item.id){
      i.quantity+=item.quantity;
      i.total=i.price*i.quantity;
      boolean=true;
    }

  }
  if(boolean==false){
    
    item.total=item.price*item.quantity;
    this.cartList.push(item)

  }
  console.log(this.cartList);
}
getTotalPrice():number{
  let tot=0;
  this.cartList.map((i:cartItem)=>{
    tot+=i.price;
  })
  console.log(tot);
  return tot;
  
}
cartPlus(c:cartItem):void{
  for(var i of this.cartList){
    if(i.id==c.id){
      i.quantity+=1;
      i.total=i.price*i.quantity;
     
    }

  }
}
cartMinus(c:cartItem):void{
  // for(var i of this.cartList){
  //   if(i.id==c.id){
  //     i.quantity+=1;
  //     i.total=i.price*i.quantity;
  //     if(i.quantity==1){
  //       this.cartList.re
  //     }
     
  //   }
    for(var i=0;i<this.cartList.length;i++){
      var item=this.cartList[i];
      if(item.id=c.id){
        if(c.quantity==1){
         delete this.cartList[i]
        }
        else{
          item.quantity-=1;
        }
      }
    }
  }
}

