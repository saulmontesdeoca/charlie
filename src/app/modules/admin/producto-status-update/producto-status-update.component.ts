import { Component, OnInit,Input } from '@angular/core';
import {ProductsService} from '../../../services/products.service';
import { Router,ParamMap  } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-producto-status-update',
  templateUrl: './producto-status-update.component.html',
  styleUrls: ['./producto-status-update.component.scss']
})
export class ProductoStatusUpdateComponent implements OnInit {
  product$: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private productsService: ProductsService) { }
              

  ngOnInit(): void {

    console.log("hola Nisim")
    this.route.paramMap.subscribe(params => {
      this.product$ = +params.get('idProd');
      console.log(this.product$);
    });
  }
  
  update(s){
    console.log("Hola")
    var id = this.product$;
    var status = s;
    this.productsService.updateStatus(id, status).subscribe(el => {console.log('hola')});

  }
  
        
    
  

}
