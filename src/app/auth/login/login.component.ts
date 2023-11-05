import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';

@Component( {
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../register/register.component.css']
} )
export class LoginComponent implements OnInit {

  users: User[] = JSON.parse( localStorage.getItem( 'users' ) || '[]' );
  registerUsers: User[] = this.users;
  invalid: boolean = false;

  constructor( private _router: Router ) { }

  onSubmit( data: User ) {
    if ( this.registerUsers.some( ( user: User ) => user.email === data.email && user.password === data.password ) ) {
      localStorage.setItem( 'userEmail', data.email )
      this._router.navigate( ['/home'] );
    }
    else if ( data.email == "olafawzi80@gmail.com" && data.password == "090890ol" ) {
      this._router.navigate( ['/dashboard'] );
    }
    else {
      this.invalid = true;
      setTimeout( () => {
        this.invalid = false;
      }, 3000 );
    }
  }

  ngOnInit(): void {
  }

}
