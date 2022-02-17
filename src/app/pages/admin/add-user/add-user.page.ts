import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UsersService } from '../../../../service/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.page.html',
  styleUrls: ['./add-user.page.scss'],
})
export class AddUserPage implements OnInit {
  constructor(private usersService: UsersService, private fb: FormBuilder) {}

  get username() {
    return this.usersForm.get('username');
  }

  get specilization() {
    return this.usersForm.get('specilization');
  }

  get email() {
    return this.usersForm.get('email');
  }

  get imageUrl() {
    return this.usersForm.get('imageUrl');
  }

  usersForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength]],
    specilization: ['', Validators.required],
    email: ['', Validators.required],
    imageUrl: ['', Validators.required],
  });

  ngOnInit() {}

  onSubmit() {

    this.usersService.addUser(this.usersForm.value);
    // console.log(this.usersService.getAllUsers());
  }
}
