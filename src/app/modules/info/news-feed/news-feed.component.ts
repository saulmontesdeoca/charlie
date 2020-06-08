import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NewsFeedService} from '../../../services/news-feed.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss']
})
export class NewsFeedComponent implements OnInit {
  feed: any;
  message: string;

  constructor(private newsFeedService: NewsFeedService, private authService: AuthService, private router: Router) { }


  ngOnInit(): void {
    this.newsFeedService.getFeed().subscribe(feed => {
      this.feed = feed;
    });
  }

  postFeed() {
    const post = {idUser: this.authService.getUser(), message: this.message};
    this.newsFeedService.postFeed(post).subscribe(data => {
      alert('Post creado');
      window.location.reload();
    },
    error => {
      console.log(error);
    });
  }

}
