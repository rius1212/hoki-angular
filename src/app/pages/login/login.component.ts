import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  dataLogin = {
    username: '',
    password: '',
  };

  constructor() { }

  ngOnInit(): void {
  }

  login(): void {
    if(this.dataLogin.username == 'admin' && this.dataLogin.password=='admin'){
      localStorage.setItem("data",'Admin')
      location.replace("http://localhost:4200/#/dashboard")
    }else if(this.dataLogin.username == 'user' && this.dataLogin.password=='user'){
      localStorage.setItem("data",'User')
      location.replace("http://localhost:4200/#/dashboard")
    }else{
      alert('Login Gagal');
      this.dataLogin = {
                username: '',
                password: '',
              };
    }
    // const data = {
    //   username: this.dataLogin.username,
    //   password: this.dataLogin.password
    // };

    // this.jwtService.login(data)
    //   .subscribe(
    //     response => {
    //       console.log(response);
    //       localStorage.setItem("apiData", JSON.stringify(response))
    //       location.replace("http://localhost:4200/banklist")
    //     },
    //     error => {
    //       console.log(error);
    //       alert('Login Gagal');
    //       this.dataLogin = {
    //         username: '',
    //         password: '',
    //       };
    //     });
  }

}
