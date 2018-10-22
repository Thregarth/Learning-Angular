import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  public users;
  public error;
  constructor( private data: DataService) { }

  ngOnInit() {
    this.data.getUsers().subscribe( data =>  this.users=data , error => this.error=error  )
  }

}
