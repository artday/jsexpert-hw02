import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './main/main.component';
import { FilmsListComponent } from './films-list/films-list.component';
import { DetailsComponent } from './details/details.component';
import { FilmItemComponent } from './film-item/film-item.component';
import { TabsComponent } from './tabs/tabs.component';
import { SharedModule } from '../shared/shared.module';

import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';

import {FilmService} from './film.service';
import {FilmFavoritesService} from './film-favorites.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatSelectModule,
    MatToolbarModule,
    MatTabsModule,
    SharedModule
  ],
  declarations: [
    MainComponent,
    FilmsListComponent,
    DetailsComponent,
    TabsComponent,
    FilmItemComponent,
  ],
  providers: [ FilmService, FilmFavoritesService ]
})
export class FilmCatalogModule { }
