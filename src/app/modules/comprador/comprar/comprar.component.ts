import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LOCALE_ID, Inject } from '@angular/core';
import {UserService} from '../../../services/user.service';
@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.scss']
})
export class ComprarComponent implements OnInit {
  carrito: any;
  total = 0;

  constructor(private router: Router, @Inject(LOCALE_ID) public locale: string, private userService: UserService) {  }

  ngOnInit(): void {
    this.carrito = this.userService.carrito[1];
    console.log(this.carrito.products[0].price);
    for (let index = 0; index < this.carrito.products.length; index++) {
      this.total += this.carrito.products[index].price;
      console.log("Price "+ this.carrito.products[index].price);
    }
  }

  onSubmit() {
    if (this.locale === 'en') {
      alert('Products bought');
    } else {
      alert('Productos comprados');
    }

    this.router.navigateByUrl('/home');
  }

}
