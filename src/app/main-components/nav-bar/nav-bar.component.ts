import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private router: Router, public authService: AuthService) { }

  ngOnInit(): void {
  }

  logOut() {
    alert('Sesion terminada');
    this.authService.logout().subscribe(data => {
      console.log(data);
      this.router.navigateByUrl('/log-in');
    },
    error => {
      console.log(error);
    });
  }

  isHomeView() {
    // return true if the current page is home
    if (this.router.url.match('^/$')) {
      return this.router.url.match('^/$');
    }
    else if (this.router.url.match('^/home$')) {
      return this.router.url.match('^/home$');
    }
  }

}
