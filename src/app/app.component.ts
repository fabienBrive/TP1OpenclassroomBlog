import { Component } from '@angular/core';
import * as firebase from 'firebase'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "TP1 Angular OpenClassroom Blog";

  constructor() {
    const firebaseConfig = {
      apiKey: "AIzaSyCzxmmo_WsJzax0uqa_9q4n2t5NRiu8VVc",
      authDomain: "openblogtp2.firebaseapp.com",
      databaseURL: "https://openblogtp2.firebaseio.com",
      projectId: "openblogtp2",
      storageBucket: "openblogtp2.appspot.com",
      messagingSenderId: "911004295933",
      appId: "1:911004295933:web:944fb6f203c2e093"
    };
    firebase.initializeApp(firebaseConfig);
  }
}
