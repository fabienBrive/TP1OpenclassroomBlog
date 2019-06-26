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
    firebase.database().ref('/posts')
    .on('value', (data) => {
        this.posts = data.val() ? data.val() : [];
        this.emitPosts();
      }
    )
  }

  savePosts() {
    firebase.database().ref('/posts').set(this.posts);
  }

  deletePost(post: Post) {
    console.log(post);
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

  getPostById(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/Posts/' + id)
        .once('value').then(
          (data) => {
            resolve(data.val());
          }, (error) => {
            reject(error);
          }
        );
      }
    );
  }

  createNewPost(newPost: Post) {
    this.posts.push(newPost);
    this.savePosts();
    this.emitPosts();
  }

  removePost(post: Post){
    const bookIndexToRemove = this.posts.findIndex(
      (bookElements) => {
        if (bookElements === post) {
          return true;
        }
      }
    );
    this.posts.splice(bookIndexToRemove, 1);
    this.savePosts();
    this.emitPosts();
  }
}
