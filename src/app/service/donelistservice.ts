import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Constants} from '../Constants';
import {ListDtos} from '../dto/list-dtos';
import {Injectable} from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class Donelistservice {
    constructor(private http: HttpClient) {
    }

    deletelistservice(task: ListDtos): Observable<void> {
        return this.http.post<void>(Constants.API_URL + '/donelist', task);
    }

    getlist(): Observable<ListDtos[]> {
        return this.http.get<ListDtos[]>('http://localhost:8080/all-todoitem');
    }

    add(newtask: ListDtos): Observable<ListDtos> {
        return this.http.post<ListDtos>(Constants.API_URL + '/all-todoitem', newtask);
    }

    delettask(id: string): Observable<ListDtos>{
        return this.http.delete<ListDtos>(Constants.API_URL + '/delettask/' + id);
    }
}
