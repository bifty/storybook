import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Person } from './person.type';

@Injectable()
export class LoadDataService {
    constructor(private httpClient: HttpClient) {
    }

    loadData(): Observable<Person> {
        // return this.httpClient.get('/api/data');
        return of({ firstName: 'Original', lastName: 'Service' });
    }

}