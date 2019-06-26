import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { Post } from 'src/app/modeles/post.model';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {

  posts: Post[];
  postsSubsciption: Subscription;


  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.postsSubsciption = this.postsService.postsSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.postsService.getPosts();
    this.postsService.emitPosts();
  }

  onLike(post: Post){
    post.likes = post.likes + 1;
    this.posts.push(post);
    this.postsService.savePosts();
    this.postsService.emitPosts();
   }

  onDislike(post: Post){
    post.likes = post.likes - 1 ;
    this.posts.push(post);
    this.postsService.savePosts();
    this.postsService.emitPosts();
  }

  ngOnDestroy(){
    this.postsSubsciption.unsubscribe();
  }

  onDeletePost(post: Post){
    this.postsService.deletePost(post);
  }




  
}
