import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {
  carrito: any;
  total = 0;
  constructor(private productsService: ProductsService, private router: Router) { }

  ngOnInit(): void {
    this.productsService.getCarritoUser().subscribe(carrito => {
      this.carrito = carrito[0];
      if (this.carrito == null || this.carrito.products.length === 0){
        alert('Carrito vacio');
        this.router.navigateByUrl('/home');
      }
      else{
        this.carrito.products.forEach(element => {
          this.total += element.price;
        });
      }
    });
}

  eliminarDelCarrito(id) {
    this.productsService.removeProductFromCarrito(id).subscribe(data => {
      alert('Producto eliminado del carrito');
      window.location.reload();
    },
    error => {
      console.log(error);
    });
  }

}
