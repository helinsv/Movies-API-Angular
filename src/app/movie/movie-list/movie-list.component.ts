import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../movie.service';
import { Movie } from '../../Movie';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.sass']
})
export class MovieListComponent implements OnInit {

  movies: Movie[];
  movieTypeDropdownOpen = false;
  currentMovieTypeFilters = [];
  currentSearch = '';
  movies$ = this.movieService.movies$;
  //i: number;

  constructor(
    private movieService: MovieService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.movieService.GetMovies().subscribe(async movies => {
      this.movies = movies;
    });

  }

}
