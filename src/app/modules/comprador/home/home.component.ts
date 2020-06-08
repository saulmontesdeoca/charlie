import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: any;
  allProducts: any;
  currentPage: number;
  pages: number;

  constructor(private productsService: ProductsService, private router: Router) {

  }

  ngOnInit(): void {
    this.productsService.getProducts(1).subscribe(productos => {
      this.products = productos;
      console.log('this.products' + this.products);
      this.currentPage = this.products.currentPage;
      this.pages = this.products.pages;
      this.allProducts = [];
      this.products.products.forEach(element => {
        element.products.forEach(prd => {
          this.allProducts.push(prd);
        });
      });
    });
  }

  getProductsPage(i) {
    this.productsService.getProducts(i).subscribe(productos => {
      this.products = productos;
      this.currentPage = this.products.currentPage;
      this.pages = this.products.pages;
      console.log(this.products);
      this.allProducts = [];
      this.products.products.forEach(element => {
        element.products.forEach(prd => {
          console.log(prd);
          this.allProducts.push(prd);
        });
      });
    });
  }

  agregarAlCarrito(id) {
    this.productsService.addProductToCarrito(id).subscribe(data => {
      alert('Producto agregado al carrito');
    },
    error => {
      console.log(error);
      if (error.message === 'Producto ya en el carrito') {
        alert(error.message);

      }
    });
  }

}
