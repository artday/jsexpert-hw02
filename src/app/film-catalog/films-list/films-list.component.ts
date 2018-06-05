import { Component, OnInit, ViewEncapsulation, EventEmitter } from '@angular/core';
import {Film} from '../film';
import { FilmService } from '../film.service';
import {MatSelectChange} from '@angular/material';

@Component({
  selector: '.films',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css']
})
export class FilmsListComponent implements OnInit {
  films: Film[];
  favorites;
  favoriteCnt;

  /* sorting */
  selected: string;
  sorting = [
    {value: 'default', viewValue: 'По умолчанию'},
    {value: 'asc', viewValue: 'По алфавиту: A-Z'},
    {value: 'desc', viewValue: 'По алфавиту: Z-A'}
  ];

  constructor(private filmsService: FilmService) {}

  doSort(value) {
    let key = 'name';
    if ( value === 'default' ) {
      key = 'id'; value = 'asc';
    }
    this.films.sort(this.compareValues(key, value));
  }

  // function for dynamic sorting
  compareValues (key, order= 'asc') {
    return (a, b) => {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        // property doesn't exist on either object
        return 0;
      }
      const varA = (typeof a[key] === 'string') ?
        a[key].toUpperCase() : a[key];
      const varB = (typeof b[key] === 'string') ?
        b[key].toUpperCase() : b[key];
      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return (
        (order === 'desc') ? (comparison * -1) : comparison
      );
    };
  }

  private favoriteTogle(event) {
    if (event.favorite === true){
      this.filmsService.favoritesService.set(event.id);
      this.favoriteCnt += 1;
    } else {
      this.filmsService.favoritesService.remove(event.id);
      this.favoriteCnt -= 1;
    }
  }

  isFavorite(id: number) {
    return Boolean(this.favorites.find((obj) => obj.id === id));
  }

  getFavoriteCnt(){
    return this.filmsService.favoritesService.all.length;
  }

  ngOnInit() {
    this.films = this.filmsService.Films;
    this.favorites = this.filmsService.favorites;
    this.favoriteCnt = this.getFavoriteCnt();
  }
}
