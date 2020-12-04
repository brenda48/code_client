import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ConfigService} from './config.service';
import {Observable} from 'rxjs/internal/Observable';

@Injectable()
export class ApiService {
  private readonly BaseUrl: string;

  constructor(private http: HttpClient, cfg: ConfigService) {
    this.BaseUrl = cfg.rest_prefix;
  }

  /* Even Odd */
  get_even_odd(value: number): Observable<'Pair' | 'Impair'> {
    return this.http.get<'Pair' | 'Impair'>(
      this.BaseUrl + 'even_odd/' + value,
      {headers: {'Content-Type': 'application/json'}},
    );
  }
}
