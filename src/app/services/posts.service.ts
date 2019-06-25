import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from 'src/app/modeles/post.model';
import * as firebase  from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts = [
    {
      title: "test post 1", 
      content: "Là je mets quelques lignes de bla bla bien sentis qui auront au moins le mérite de m'exercer à taper du texte au kilomètre, chose dans laquelle je m'améliore mais ou je ne suis pas encore le plus a l'aise du monde, bref ca doit etre suffisant pour ce post alors mercay et a bientot evidement...",
      likes: 2,
      date: new Date()
    }
  ];
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
