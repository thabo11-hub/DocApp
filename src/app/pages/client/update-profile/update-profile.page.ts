import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UsersService } from '../../../../service/users.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.page.html',
  styleUrls: ['./update-profile.page.scss'],
})
export class UpdateProfilePage implements OnInit {

  constructor(private fb: FormBuilder, private usersService: UsersService) { }

  get username() {
    return this.userUpdateForm.get('username');
  }

  get userEmail() {
    return this.userUpdateForm.get('userEmail');
  }

  get userPhone() {
    return this.userUpdateForm.get('userPhone');
  }

  get userPassword() {
    return this.userUpdateForm.get('userPassword');
  }

  userUpdateForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(2)]],
    userEmail: ['', [Validators.required, Validators.email]],
    userPhone: ['', [Validators.required, Validators.minLength(10)]],
    userPassword: ['', [Validators.required, Validators.minLength(6)]],
  });

  ngOnInit() {
    // ... get user details from database and set the form fields as such
  }

  onSubmit() {
    this.usersService.updateUser(this.userUpdateForm.value);
  }

}
