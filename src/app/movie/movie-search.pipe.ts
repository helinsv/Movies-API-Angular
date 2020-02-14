import { Pipe } from "@angular/core";
import { Movie } from '../Movie';

@Pipe({
  name: "search_filter",
  pure: true
})

export class SearchPipe {
  transform(movies: Movie[], name: string):  Movie[] {
    if(!movies)return null;
    if(!name)return movies;
    name = name.toLowerCase();

    return movies.filter(it => {
      return it.movie_title.toLowerCase().includes(name);
    });
  }

}









