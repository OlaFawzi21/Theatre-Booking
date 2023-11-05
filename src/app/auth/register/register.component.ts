import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';

@Component( {
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
} )
export class RegisterComponent implements OnInit {
  userModel: User = {
    name: '',
    email: '',
    password: '',
    phone: '',
    repeatPassword: ''
  };

  invalid: boolean = false;
  users: User[] = JSON.parse( localStorage.getItem( 'users' ) || '[]' );
  registerUsers: User[] = this.users;

  constructor( private _router: Router ) { }

  onSubmit( data: User ) {
    if ( this.registerUsers.some( user => user.email === data.email ) ) {
      this.invalid = true;
      setTimeout( () => {
        this.invalid = false;
      }, 3000 );
      return;
    }
    this.registerUsers.push( data );
    localStorage.setItem( 'users', JSON.stringify( this.registerUsers ) );
    this._router.navigate( ['/login'] );
  }

  ngOnInit(): void { }
}