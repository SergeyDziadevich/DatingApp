import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export interface Users {
  id: number;
  userName: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'The Dating app';
  users: Users[];

  constructor(private http: HttpClient) {}


  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.http.get<Array<Users>>('https://localhost:5001/api/users/').subscribe(users => {
      this.users = users;
    }, error => {
      console.log(error);
    });
  }
}
