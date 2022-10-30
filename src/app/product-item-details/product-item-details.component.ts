import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../models/Items';
import { ItemService } from '../service/item.service';
@Component({
  selector: 'app-product-item-details',
  templateUrl: './product-item-details.component.html',
  styleUrls: ['./product-item-details.component.css']
})
export class ProductItemDetailsComponent implements OnInit {
  id:any;
  itemss:Item[]=[];
 
  constructor(private route: ActivatedRoute) {
    this.id=this.route.snapshot.paramMap.get("id");
    console.log(this.id)
   }
  
  ngOnInit(): void {
  // this.itemss=this.itemService.getItems()
  }

}
