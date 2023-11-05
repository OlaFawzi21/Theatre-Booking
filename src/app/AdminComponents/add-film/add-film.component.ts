import { Component, OnInit } from '@angular/core';
import { Book, FilmCinema } from 'src/app/interfaces/film';

@Component( {
  selector: 'app-add-film',
  templateUrl: './add-film.component.html',
  styleUrls: ['./add-film.component.css']
} )
export class AddFilmComponent implements OnInit {

  filmsData: FilmCinema[] = JSON.parse( localStorage.getItem( 'films' ) || '[]' );
  valid: boolean = false;
  msg: string = '';

  constructor() { }
  onSubmit( data: FilmCinema ) {

    // to show alert
    this.valid = true;
    setTimeout( () => {
      this.valid = false;
    }, 2500 );

    if ( this.filmsData.some( ele => ele.id === data.id ) ) {
      // pass fail msg in alert
      this.msg = "This ID is Taken!";
      return
    }

    // to make arr of chairs with No chairs
    const chairsData: Book[] = [];
    for ( let i = 1; i <= data.numberOfChairs; i++ ) {
      const chair: Book = {
        id: i,
        filmID: data.id,
        userEmail: '',
        username: '',
        wantBook: false,
        wantFood: false,
        phone: ''
      };
      chairsData.push( chair );
      data.chairs = chairsData;
    }
    data.showChairs = false;
    this.filmsData.push( data );
    localStorage.setItem( 'films', JSON.stringify( this.filmsData ) );
    // pass success msg in alert
    this.msg = "Added Successfully";

  }
  ngOnInit(): void {
  }

}
