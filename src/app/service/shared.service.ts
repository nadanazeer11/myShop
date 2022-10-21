import { Injectable } from '@angular/core';
import { Observable, Subject,BehaviorSubject} from 'rxjs';
import { Item } from '../models/Items';
import { cartItem } from '../models/cartItem';
import { hide } from '@popperjs/core';
import { det } from '../models/confDetails';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
public productList=new BehaviorSubject<Item []>([]);
public cartList:cartItem[]=[];
public details:det;

constructor(){
  this.details={name:'',price:0}
}
getProducts(){
  return this.cartList;
}
addtoCart(item:cartItem){
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
    tot+=i.total;
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
cartMinus(c:cartItem):boolean{
 
    var hide=false;
    
    for(var i=0;i<this.cartList.length;i++){
      var item=this.cartList[i];
      if(item.id==c.id){
        if(c.quantity==1){
         delete this.cartList[i]
         hide=true
        }
        else{
          item.quantity-=1;
          item.total=item.price*item.quantity;
        }
      }
    }
    return hide;
  }
  setDet(details:det):void{
    console.log("service el galy",details);
    this.details=details;
   
   
  
  }
  getDet():det{
    return this.details;
  }
  
}

