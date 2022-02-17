import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user.model';
import { UsersService } from '../../../../service/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {
  users: User [] = [];

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.users = this.usersService.getAllUsers();
  }



}
