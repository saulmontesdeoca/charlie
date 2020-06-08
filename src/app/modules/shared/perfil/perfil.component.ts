import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../../services/products.service';
import {Product } from 'src/app/interfaces/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  user: any;
  products: any;
  product: Product;
  idUser: any;
  constructor(private productsService: ProductsService, private router: Router) { }

  ngOnInit(): void {
    this.productsService.getProductsUser().subscribe(productos => {
      this.user = productos;
      this.products = this.user.products;
    });
  }

  findElement(index){
    this.product = this.products[index];
    this.productsService.removeProduct(this.product.idProd).subscribe(data => {
      alert('Producto eliminado');
      window.location.reload();
    },
    error => {
      console.log(error);
    });
  }

  findProduct(index){
    this.product = this.products[index];
    this.productsService.setProduct(this.product);
  }

}
