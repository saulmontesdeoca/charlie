import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LOCALE_ID, Inject } from '@angular/core';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.scss']
})
export class ComprarComponent implements OnInit {

  constructor(private router: Router, @Inject(LOCALE_ID) public locale: string) {  }

  ngOnInit(): void {
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
