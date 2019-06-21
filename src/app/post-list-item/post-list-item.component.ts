import { Component, OnInit, Input } from '@angular/core';

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
