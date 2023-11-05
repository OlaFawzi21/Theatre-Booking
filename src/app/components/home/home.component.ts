import { Component, OnInit } from '@angular/core';
import { Book, FilmCinema } from 'src/app/interfaces/film';
import { User } from 'src/app/interfaces/user';

@Component( {
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
} )
export class HomeComponent implements OnInit {

  filmsData: FilmCinema[] = JSON.parse( localStorage.getItem( 'films' ) || '[]' );
  film?: FilmCinema;
  chair?: Book;
  showAllChairs: boolean = false;
  total = Number( localStorage.getItem( 'total' ) ) || 0;
  userEmail = localStorage.getItem( 'userEmail' ) || '';
  noChairBook: number = this.getBookedChairCount();
  noChairBookWithFood: number = this.getBookedChairCountWithFood();
  valid: boolean = false;
  constructor( ) {
  }

  booking( data: Book ) {
    this.film = this.filmsData.find( ele => ele.id === data.filmID );
    this.chair = this.film?.chairs.find( ele => ele.id === data.id );
    if ( this.chair && !this.chair.wantBook ) {
      this.chair.wantBook = true;
      this.chair.wantFood = false;
      this.chair.userEmail = this.userEmail;
      this.noChairBook = this.getBookedChairCount();
      this.calculateTotalPrice();
      localStorage.setItem( 'films', JSON.stringify( this.filmsData ) );
    }
  }

  unBooking( data: Book ) {
    this.film = this.filmsData.find( ele => ele.id === data.filmID );
    this.chair = this.film?.chairs.find( ele => ele.id === data.id );
    if ( this.chair ) {
      this.chair.wantBook = false;
      this.chair.wantFood = false;
      this.chair.userEmail = '';
      this.chair.username = '';
      this.chair.phone = '';
      this.noChairBook = this.getBookedChairCount();
      this.noChairBookWithFood = this.getBookedChairCountWithFood();
      this.calculateTotalPrice();
      localStorage.setItem( 'films', JSON.stringify( this.filmsData ) );
    }
  }

  updateFoodPreference( data: Book ) {
    this.film = this.filmsData.find( ele => ele.id === data.filmID );
    this.chair = this.film?.chairs.find( ele => ele.id === data.id );
    if ( this.chair ) {
      this.chair.wantFood = !this.chair.wantFood;
      this.noChairBookWithFood = this.getBookedChairCountWithFood();
      this.calculateTotalPrice();
      localStorage.setItem( 'films', JSON.stringify( this.filmsData ) );
    }
  }

  calculateTotalPrice() {
    this.total = ( this.getBookedChairCount() * this.film!.chairPice ) + ( this.getBookedChairCountWithFood() * this.film!.foodPrice );
    localStorage.setItem( 'total', this.total.toString() );
  }

  getBookedChairCount(): number {
    return this.filmsData.reduce( ( count, film ) => {
      return count + film.chairs.filter( chair => chair.wantBook && chair.userEmail === this.userEmail && !chair.username ).length;
    }, 0 );
  }

  getBookedChairCountWithFood(): number {
    return this.filmsData.reduce( ( count, film ) => {
      return count + film.chairs.filter( chair => chair.wantBook && chair.wantFood && chair.userEmail === this.userEmail && !chair.username ).length;
    }, 0 );
  }


  displayChairs( film: FilmCinema ) {
    film.showChairs = !film.showChairs;
  }

  showBookChairsCart( Film: FilmCinema ): Book[] {
    const chairsBooking = Film.chairs.filter( ele => ele.wantBook && ele.userEmail === this.userEmail && !ele.username );
    return chairsBooking;
  }


  onSubmit( data: User ) {
    this.filmsData.forEach( ele => {
      const chairs = ele.chairs.filter( ele => {
        return ele.userEmail == this.userEmail;
      } );
      chairs.forEach( ele => {
        ele.username = data.name;
        ele.phone = data.phone;
      } );
    } );
    localStorage.setItem( 'films', JSON.stringify( this.filmsData ) );
    localStorage.removeItem( 'total' );
    this.valid = true;
    setTimeout( () => {
      this.valid = false;
    }, 2000 );
    location.reload();
  }

  logout() {
    localStorage.removeItem( "userEmail" );
  }
  ngOnInit(): void {
  }

}
