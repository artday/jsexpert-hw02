import { Injectable } from '@angular/core';
import {Favorite} from './favorite';

@Injectable(
  // {providedIn: 'root'}
)
export class FilmFavoritesService {
  private favorites: Favorite [] = [
    {id: 3},
    {id: 4},
  ];
  constructor() {}

  /* FavoritesGetter */
  get all() {
    return this.favorites;
  }

  set(id: number){
    this.favorites.push({id: id});
  }

  remove(id: number){
    this.favorites = this.favorites.filter((el) => {
      return el.id !== id;
    });
  }

}
