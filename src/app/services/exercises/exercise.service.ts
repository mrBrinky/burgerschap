import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {Exercise} from '../../exercise';

@Injectable({
    providedIn: 'root',
})
@Injectable()
export class ExerciseService {
    private apiUrl = 'http://localhost:3000/exercises';

    constructor(private http: HttpClient) {
    }

    getHeroes(): Observable<Exercise[]> {
        return this.http.get<Exercise[]>(this.apiUrl);

    }

    getQuestion(id: number): Observable<Exercise[]> {
        return this.http.get<Exercise[]>(`${this.apiUrl}/${id}`);
    }


}
