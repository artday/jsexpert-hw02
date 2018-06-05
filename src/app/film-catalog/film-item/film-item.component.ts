import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
import {Film} from '../film';

@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.css']
})
export class FilmItemComponent implements OnInit {
  @Input('data') film: Film;
  @Input() favorite: boolean;
  @Output() favoriteEmit = new EventEmitter();

  constructor() { }

  favoriteTogle(){
    this.favorite = !this.favorite;
    this.favoriteEmit.emit({id: this.film.id, favorite: this.favorite});
  }

  ngOnInit() { }

  get id() { return this.film.id; }
  get name() { return this.film.name; }
  get year() { return this.film.year; }
  get imgUrl() {return this.film.imgUrl; }
  get description() { return this.film.description; }
}
