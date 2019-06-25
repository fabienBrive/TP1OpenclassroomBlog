import { Component, OnInit, Input } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Post } from '../modeles/post.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

@Input() postTitle: string;
@Input() postContent: string;
@Input() postLikes: number;
@Input() postDate: Date;

  constructor() {
   }

  ngOnInit() {
  }

  onLike(){
    this.postLikes++;
   }

  onDislike(){
    this.postLikes--;
  }
}
