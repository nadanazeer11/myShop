import { Component, OnInit } from '@angular/core';
import { ItemService } from '../service/item.service';
import { Item } from '../models/Items';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  itemss:Item[]=[];
  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemService.getItems().subscribe(data => {
      this.itemss = data;
      this.itemss.forEach((i:Item)=>{
        Object.assign(i,{quantity:0,total:0})
      })
      // for (var i of this.itemss){
      //   i.quantity=0;
      //   i.total=0;
      // }
    });
   
      


}
}
