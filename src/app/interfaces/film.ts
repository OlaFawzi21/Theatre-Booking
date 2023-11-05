export interface FilmCinema {
    id: number,
    title: string;
    numberOfChairs: number,
    chairPice: number,
    foodPrice: number,
    director: string;
    releaseDate: string,
    duration: number,
    chairs: Book[],
    showChairs: boolean;
}

export interface Book {
    id: number,
    filmID: number,
    userEmail: string,
    username: string,
    wantBook: boolean,
    wantFood: boolean,
    phone:string
}
