import { Pipe } from "@angular/core";
import { Movie } from '../Movie';

@Pipe({
  name: "genres_filter",
  pure: true
})

export class PaGenresFilterPipe {
  transform(movies: Movie[], genres: string):  Movie[] {
    return genres == undefined || genres == "All" ?
      movies : movies.filter(p => p.genres.includes(genres) == true);
    }


}


// movies : movies.filter(p => p.genres == genres);

