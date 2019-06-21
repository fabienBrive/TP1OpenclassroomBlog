import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from 'src/app/modeles/post.model';
import * as firebase  from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts = [];
  postsSubject = new Subject<Post[]>();

  emitPosts(){
    this.postsSubject.next(this.posts.slice());
  }

  getPosts(){
    firebase.database().ref('/posts').set(this.posts);
  }

  addPost(post: Post) {
    this.posts.push(post);
    this.emitPosts();
  }

  savePosts() {
    firebase.database().ref('/posts').set(this.posts);
  }

  deletePost(post: Post) {
    const postIndexToRemove = this.posts.findIndex(
      (postElement) => {
        if (postElement === post) {
          return true;
        }
      }
    );
    this.posts.splice(postIndexToRemove, 1);
    this.savePosts();
    this.emitPosts();
  }

  createNewPost(newPost: Post) {
    this.posts.push(newPost);
    this.savePosts();
    this.emitPosts();
  }
}
