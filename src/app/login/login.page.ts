import { Component, OnInit } from '@angular/core';
import { FormControl,Validators, FormGroup,FormBuilder,NgControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/service/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
signInForm : FormGroup;
msg : any;
  constructor(private fb : FormBuilder,  private auth : AuthService,private route : Router) {
    this.run();
   }


  ngOnInit() {
    this.signInForm = this.fb.group({
      email:["",Validators.email],
      password:["",Validators.required]
    })
  }

  run(){
    this.auth.getAllUsers().subscribe((res)=>{
      console.log(res);
    })
  }
onSubmit(): void {
  if(this.signInForm.valid){
    console.log(this.signInForm.value);  // {first: 'Nancy', last: 'Drew'}

    const formData = this.signInForm.value;
    
    this.auth.signIn(formData).subscribe((res) => {
      this.msg = res;
      console.log(this.msg)
    
      if(this.msg.status == 200){
        console.log(+this.msg.status+" "+this.msg.msg.msg)
        alert(this.msg.msg.email+"Signed In Successfully");
        this.route.navigateByUrl('');
      }
      else if(this.msg.status == 401){
        console.log(+this.msg.status+" "+this.msg.msg)
        alert(this.msg.msg);
      }
      else{
        console.log(+this.msg.status+" "+this.msg.msg)
        alert(this.msg.msg);
      }
      // alert(this.msg.status);
    })
  }
  else{
    alert('Please fill all fields');
  }
}
}
