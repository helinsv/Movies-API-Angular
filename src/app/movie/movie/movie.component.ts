import { Component, OnInit, Input} from '@angular/core';
import { Movie } from '../../Movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.sass']
})
export class MovieComponent implements OnInit {
  @Input() movie: Movie;

  ngOnInit() {
  }

}
