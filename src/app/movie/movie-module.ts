import { NgModule } from '@angular/core';
import { MovieComponent } from './movie/movie.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { PaGenresFilterPipe } from './genresFilter.pipe';
import { SortPipe } from './movie-sort-filter.pipe';
import { SearchPipe } from './movie-search.pipe';

@NgModule({
  declarations: [
    MovieComponent,
    MovieListComponent,
    PaGenresFilterPipe,
    SortPipe,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot([{
      path: 'home', component: MovieListComponent
    }
  ]),
  ReactiveFormsModule,
  HttpClientModule,
  FormsModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
]
})


export class MovieModule {

}
