import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Iuser } from 'src/app/model/Iuser';
import { AlertifyService } from 'src/app/Services/alertify.service';
import { UserService } from 'src/app/Services/user.service';


@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {

  user:Iuser;
  registerationForms!: FormGroup;

  constructor(private fb:FormBuilder,
              private userService:UserService,
              private alertifyservice:AlertifyService) { }

  ngOnInit() {

    // this.registerationForms= new FormGroup({
    //   userName: new FormControl('bharat',Validators.required),
    //   email:new FormControl(null,[Validators.required,Validators.email]),
    //   password: new FormControl(123,[Validators.required,Validators.minLength(8)]),
    //   confirmPassword: new FormControl(123,[Validators.required,Validators.minLength(8)]),
    //   mobile:new FormControl(null,[Validators.required, Validators.minLength(10),Validators.pattern('^[0-9]*$')])

    // },this.passwordMatchingValidator);
    this.createregistrastionform();
  }

  createregistrastionform()
  {
    this.registerationForms= this.fb.group({
      userName:[null,Validators.required],
      email:[null,[Validators.email]],
      password:[null,[Validators.required,Validators.minLength(1)]],
      confirmPassword:[null],
      mobile:[null]
    },{Validators:this.passwordMatchingValidator})
  }

  passwordMatchingValidator():Validators {
    return true
    //return this.registerationForms?.get('password')?.value== this.registerationForms?.get('confirmPassword')?.value?true:{notmatched:true}
  }
  get userName()
  {
    return this.registerationForms.get('userName') as FormControl
  }
  getuserdata():Iuser
  {
    return this.user={
      userName:this.userName.value,
      email:this.userName.value,
      password:'123',
      mobile:123
    }
  }
  onSubmit()
  {
    if(this.registerationForms.valid)
    {
    console.log(this.registerationForms);
    // this.user=Object.assign(this.user,this.registerationForms.value);
    this.userService.addUsers(this.getuserdata());
    this.registerationForms.reset();
    // alertify.success('welcome');
    }
    else
    {
      this.alertifyservice.error('something wrong');
    }
  }

  // addUsers(user: any)
  // {
  //   let users=[];
  //   if(localStorage.getItem('users'))
  //   {
  //     users=JSON.parse(localStorage.getItem('users')||'{}');
  //     // users=[user,...users]
  //     users=[...users,user]
  //   }
  //   else
  //   {
  //     users=[user];
  //   }
  //   localStorage.setItem('users',JSON.stringify(users));

  // }

}
