import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadDataService } from './load-data.service';
import { Person } from './person.type';

@Component({
    selector: 'my-component',
    template: `
    <div *ngIf="myData | async as data">
        <pre>{{data.firstName}}</pre>
        <pre>{{data.lastName}}</pre>
    </div>
    `
})
export class MyComponent implements OnInit {
    myData: Observable<Person>;
    constructor(private dataService: LoadDataService) {
    }

    ngOnInit(): void {
        this.myData = this.dataService.loadData();
    }
}