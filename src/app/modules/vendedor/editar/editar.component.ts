import { Component, OnInit } from '@angular/core';
import {User} from '../../../interfaces/user';
import {UserService} from '../../../services/user.service'
import { product } from 'src/app/interfaces/product';
@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {
  user: User;
  product: product;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.product = this.userService.product;
    console.log(this.product);
  }
  
  

}
