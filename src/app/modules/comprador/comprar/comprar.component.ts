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
  constructor(private router: Router, @Inject(LOCALE_ID) public locale: string, private userService: UserService) {  }

  ngOnInit(): void {
    this.carrito = this.userService.carrito[1];
    console.log(this.carrito);
  }

  onSubmit() {
    if (this.locale === 'en') {
      alert('Product bought');
    } else {
      alert('Producto comprado');
    }

    this.router.navigateByUrl('/home');
  }

}
