import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
  }

  getActive(){
    if (this.userService.getUser() == null) {
      return true;
    }
  }

  logOut() {
    alert('Sesion terminada');
    this.userService.logout().subscribe(data => {
      console.log(data);
      this.router.navigateByUrl('/log-in');
    },
    error => {
      console.log(error);
    });
  }

}
