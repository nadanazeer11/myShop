import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../models/Items';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }
  configUrl = 'assets/data.json';
  getItems(): Observable<Item[]>{
     return this.http.get<Item[]>(this.configUrl);
  }
 
}
