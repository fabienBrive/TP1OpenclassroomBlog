import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostsService } from '../services/posts.service';
import { Router } from '@angular/router';
import { Post } from 'src/app/modeles/post.model';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  postForm: FormGroup;

  constructor( private fomrBuilder: FormBuilder,
               private postsService: PostsService,
               private router: Router ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.postForm = this.fomrBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    })
  }

  onSavePost(){
    const title = this.postForm.get('title').value;
    const content = this.postForm.get('content').value;
    const newPost = new Post(title, content);
    this.postsService.createNewPost(newPost);
    this.router.navigate(['/posts']);
  }

}
