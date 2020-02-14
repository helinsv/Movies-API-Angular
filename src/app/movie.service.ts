import { Injectable } from '@angular/core';
import { Movie} from './Movie';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../environments/environment';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movies$ = new BehaviorSubject({ loading: true, data: []});

  constructor(private http: HttpClient) { }

  GetMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${environment.apiUrl}`);
    //return this.http.get(`${environment.apiUrl}`).pipe(map(r => r.json()));
  }

}
