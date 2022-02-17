import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators , FormGroup} from '@angular/forms';
import { AuthService } from 'src/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registrationForm : FormGroup;
  msg:any;
  constructor(
    private fb: FormBuilder, private auth : AuthService,
  ) { }

  get name() {
    return this.registrationForm.get('name');
  }

  get phone() {
    return this.registrationForm.get('phone');
  }

  get email() {
    return this.registrationForm.get('email');
  }

  get password() {
    return this.registrationForm.get('password');
  }




  ngOnInit() {
    this.registrationForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', Validators.email],
      password: ['', [Validators.required,Validators.minLength(5)]],
      phone: ['', [Validators.required,Validators.minLength(9)]]
    })
  }

  onSubmit(){
    if(this.registrationForm.valid) {

      console.log(this.registrationForm.value);
      const formData = this.registrationForm.value;
      let date = Date();
      var regObj = {
        id:0,
        uuid:'93101e96-3dc4-4e41-a57a-6e3ab1840b2c',
        user_role_id: "0",
        email: "",
        firstname: "",
        phone: "",
        emailVerified: "0",
        password: "",
        profileComplete: "0",
        last_login: "2020-01-01",
        created_at: "2020-01-01",
        isActive: "1"
      }
      regObj.email = formData.email;
      regObj.firstname = formData.name;
      regObj.phone = formData.phone;
      regObj.password = formData.password;
      this.auth.signUp(regObj);//.subscribe((res) => {
      //   this.msg = res;
      //   console.log(this.msg)
      // })
    }
    else{
      alert('Please fill in all the required field');
    }

  }

}
