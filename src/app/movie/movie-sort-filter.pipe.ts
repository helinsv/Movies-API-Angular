import { Pipe, PipeTransform } from '@angular/core';
import { orderBy, sortBy } from 'lodash';
import { Movie } from '../Movie';

@Pipe({
  name: 'sort_filter'
})
export class SortPipe implements PipeTransform {
  transform(movie: Movie[], order = '', column: string):  Movie[] {
    if (!movie || order === '' || !order) { return movie; } // no array
    if (!column || column === '') { return movie; } // sort 1d array
    if (movie.length <= 1) { return movie; } // array with only one item
    return orderBy(movie, [column], [order]);
  }

}
