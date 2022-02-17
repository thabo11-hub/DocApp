import { Injectable } from '@angular/core';
import { Client, User } from '../app/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private users: User[] = [
    {
      id: 'd1',
      name: 'Dr Smith',
      specilization: 'General',
      email: 'drsmith@email.com',
      imageUrl: 'https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    },
    {
      id: 'd2',
      name: 'Dr Strange',
      specilization: 'Cardiologist',
      email: 'drs@email.com',
      imageUrl: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
  ];

  constructor() {}

  getAllUsers() {
    return [...this.users];
  }

  getUser(userId: String) {
    return {
      ...this.users.find((user) => {
        return user.id === userId;
      }),
    };
  }

  deleteUser(userId: String) {
    this.users = this.users.filter((user) => {
      return user.id !== userId;
    });
  }

  addUser(newUser: User) {
    return this.users.push(newUser);
  }

  updateUser(user: Client){
    
  }
}
