import { Injectable } from '@angular/core';
import  *  as  data  from '../../data/data.json'


@Injectable({
  providedIn: 'root'
})
export class UserService {
  datos:  any  = (data  as  any).default;
  products: any = data.products;
  constructor() { }
  
  addProduct(datos: any) {
    this.products.push(datos);
  }
}
