import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmCinema, Book } from 'src/app/interfaces/film';

@Component( {
  selector: 'app-edit-film',
  templateUrl: './edit-film.component.html',
  styleUrls: ['./edit-film.component.css', '../add-film/add-film.component.css']
} )
export class EditFilmComponent implements OnInit {


  films = JSON.parse( localStorage.getItem( 'films' ) || '[]' );
  filmsData: FilmCinema[] = this.films;
  film?: FilmCinema;
  id: number = 0;
  valid: boolean = false;

  constructor( _activeRoute: ActivatedRoute ) {
    this.id = +_activeRoute.snapshot.params['id'];
    this.film = this.filmsData.find( ele => {
      return ele.id === this.id;
    } );
  }


  onSubmit( data: FilmCinema ) {
    this.film!.title = data.title;
    this.film!.director = data.director;
    this.film!.numberOfChairs = data.numberOfChairs;
    this.film!.chairPice = data.chairPice;
    this.film!.foodPrice = data.foodPrice;
    this.film!.duration = data.duration;
    this.film!.releaseDate = data.releaseDate;
    this.film?.chairs.splice( 0 );
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
      this.film?.chairs.push( chair );
    }
    data.showChairs = false;
    localStorage.setItem( 'films', JSON.stringify( this.filmsData ) );
    this.valid = true;
    setTimeout( () => {
      this.valid = false;
    }, 2500 );
  }


  ngOnInit(): void {

  }
}
