import {Observable} from 'rxjs';
import {ListDtos} from '../dto/list-dtos';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Constants} from '../Constants';
@Injectable({
    providedIn: 'root'
})
export class Getlistservice {

    constructor(private http: HttpClient) {
    }

    getlist(): Observable<ListDtos[]> {
        return this.http.get<ListDtos[]>('http://localhost:8080/all-done');
  }

   undonetask(task: ListDtos): Observable<void> {
    return this.http.post<void>(Constants.API_URL + '/undone', task );
}
}
