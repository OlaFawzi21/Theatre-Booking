import { Component, OnInit } from '@angular/core';
import { FilmCinema } from 'src/app/interfaces/film';
import Swal from 'sweetalert2';

@Component( {
  selector: 'app-admin-dash',
  templateUrl: './admin-dash.component.html',
  styleUrls: ['./admin-dash.component.css']
} )
export class AdminDashComponent implements OnInit {
  // [{ "id": 1, "title": "film 1", "director": "one", "numberOfChairs": 20, "chairPice": 50, "foodPrice": 100, "duration": 120, "releaseDate": "2023-11-07", "chairs": [{ "id": 1, "filmID": 1, "userEmail": "", "username": "", "wantBook": false, "wantFood": false, "phone": "" }, { "id": 2, "filmID": 1, "userEmail": "", "username": "ola fawzi", "wantBook": false, "wantFood": false, "phone": "01012323434" }, { "id": 3, "filmID": 1, "userEmail": "", "username": "ola fawzi", "wantBook": false, "wantFood": false, "phone": "01012323434" }, { "id": 4, "filmID": 1, "userEmail": "", "username": "", "wantBook": false, "wantFood": false, "phone": "" }, { "id": 5, "filmID": 1, "userEmail": "", "username": "", "wantBook": false, "wantFood": false, "phone": "" }, { "id": 6, "filmID": 1, "userEmail": "", "username": "", "wantBook": false, "wantFood": false, "phone": "" }, { "id": 7, "filmID": 1, "userEmail": "", "username": "", "wantBook": false, "wantFood": false, "phone": "" }, { "id": 8, "filmID": 1, "userEmail": "", "username": "", "wantBook": false, "wantFood": false, "phone": "" }, { "id": 9, "filmID": 1, "userEmail": "", "username": "", "wantBook": false, "wantFood": false, "phone": "" }, { "id": 10, "filmID": 1, "userEmail": "", "username": "", "wantBook": false, "wantFood": false, "phone": "" }, { "id": 11, "filmID": 1, "userEmail": "", "username": "", "wantBook": false, "wantFood": false, "phone": "" }, { "id": 12, "filmID": 1, "userEmail": "", "username": "", "wantBook": false, "wantFood": false, "phone": "" }, { "id": 13, "filmID": 1, "userEmail": "", "username": "", "wantBook": false, "wantFood": false, "phone": "" }, { "id": 14, "filmID": 1, "userEmail": "", "username": "", "wantBook": false, "wantFood": false, "phone": "" }, { "id": 15, "filmID": 1, "userEmail": "", "username": "", "wantBook": false, "wantFood": false, "phone": "" }, { "id": 16, "filmID": 1, "userEmail": "", "username": "", "wantBook": false, "wantFood": false, "phone": "" }, { "id": 17, "filmID": 1, "userEmail": "", "username": "", "wantBook": false, "wantFood": false, "phone": "" }, { "id": 18, "filmID": 1, "userEmail": "", "username": "", "wantBook": false, "wantFood": false, "phone": "" }, { "id": 19, "filmID": 1, "userEmail": "", "username": "", "wantBook": false, "wantFood": false, "phone": "" }, { "id": 20, "filmID": 1, "userEmail": "", "username": "", "wantBook": false, "wantFood": false, "phone": "" }], "showChairs": true }]
  filmsData: FilmCinema[] = JSON.parse( localStorage.getItem( 'films' ) || '[]' );
  id: number = 0;
  constructor() {
    this.confirmChairsBook();
    console.log(this.filmsData);
    
  }

  // display information about user just when confirmed cart
  confirmChairsBook() {
    this.filmsData.forEach( ele => {
      const confirmChairs = ele.chairs.filter( ele => {
        return ( !ele.username );
      } );
      confirmChairs.forEach( ele => {
        ele.userEmail = '';
        ele.wantBook = false;
        ele.wantFood = false;
      } )
    } );
    localStorage.setItem( 'films', JSON.stringify( this.filmsData ) );
  }

  getNoBooking( film: FilmCinema ) {
    return film.chairs.filter( chair => chair.wantBook ).length
  }

  getWithFood( film: FilmCinema ) {
    return film.chairs.filter( chair => chair.wantFood ).length

  }

  delete( id: number ) {
    Swal.fire( {
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    } ).then( ( result ) => {
      if ( result.isConfirmed ) {
        this.filmsData = this.filmsData.filter( film => film.id !== id );
        localStorage.setItem( 'films', JSON.stringify( this.filmsData ) );
        console.log( this.filmsData );
        console.log( this.id );

        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    } )
  }
  ngOnInit(): void {
    // if ( !this.filmsData == '[]') {
    //   const defaultFilms: FilmCinema[] = [
    //     { "id": 1, "title": "film 1", "director": "one", "numberOfChairs": 20, "chairPice": 50, "foodPrice": 100, "duration": 120, "releaseDate": "2023-11-07", "chairs": [{ "id": 1, "filmID": 1, "userEmail": "", "username": "", "wantBook": false, "wantFood": false, "phone": "" }, { "id": 2, "filmID": 1, "userEmail": "", "username": "ola fawzi", "wantBook": false, "wantFood": false, "phone": "01012323434" }, { "id": 3, "filmID": 1, "userEmail": "", "username": "ola fawzi", "wantBook": false, "wantFood": false, "phone": "01012323434" }, { "id": 4, "filmID": 1, "userEmail": "", "username": "", "wantBook": false, "wantFood": false, "phone": "" }, { "id": 5, "filmID": 1, "userEmail": "", "username": "", "wantBook": false, "wantFood": false, "phone": "" }, { "id": 6, "filmID": 1, "userEmail": "", "username": "", "wantBook": false, "wantFood": false, "phone": "" }, { "id": 7, "filmID": 1, "userEmail": "", "username": "", "wantBook": false, "wantFood": false, "phone": "" }, { "id": 8, "filmID": 1, "userEmail": "", "username": "", "wantBook": false, "wantFood": false, "phone": "" }, { "id": 9, "filmID": 1, "userEmail": "", "username": "", "wantBook": false, "wantFood": false, "phone": "" }, { "id": 10, "filmID": 1, "userEmail": "", "username": "", "wantBook": false, "wantFood": false, "phone": "" }, { "id": 11, "filmID": 1, "userEmail": "", "username": "", "wantBook": false, "wantFood": false, "phone": "" }, { "id": 12, "filmID": 1, "userEmail": "", "username": "", "wantBook": false, "wantFood": false, "phone": "" }, { "id": 13, "filmID": 1, "userEmail": "", "username": "", "wantBook": false, "wantFood": false, "phone": "" }, { "id": 14, "filmID": 1, "userEmail": "", "username": "", "wantBook": false, "wantFood": false, "phone": "" }, { "id": 15, "filmID": 1, "userEmail": "", "username": "", "wantBook": false, "wantFood": false, "phone": "" }, { "id": 16, "filmID": 1, "userEmail": "", "username": "", "wantBook": false, "wantFood": false, "phone": "" }, { "id": 17, "filmID": 1, "userEmail": "", "username": "", "wantBook": false, "wantFood": false, "phone": "" }, { "id": 18, "filmID": 1, "userEmail": "", "username": "", "wantBook": false, "wantFood": false, "phone": "" }, { "id": 19, "filmID": 1, "userEmail": "", "username": "", "wantBook": false, "wantFood": false, "phone": "" }, { "id": 20, "filmID": 1, "userEmail": "", "username": "", "wantBook": false, "wantFood": false, "phone": "" }], "showChairs": true }]

    //     ;

    //   this.filmsData.push(defaultFilms);
    //   localStorage.setItem( 'films', JSON.stringify( this.filmsData ) );
    // }
    // Any additional initialization logic can be placed here
  }
}