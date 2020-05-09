import { Component, OnInit } from '@angular/core';
import  *  as  data  from '../../../../data/data.json'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  datos:  any  = (data  as  any).default;

  constructor() { 

  }

  ngOnInit(): void {
    console.log(this.datos);
  }

}
