import { Component }     from '@angular/core';
import { Http }          from '@angular/http';
import { EventService }  from './event.service';

@Component({
  selector: 'app',
  providers: [ EventService ],
  template: `<app-layout></app-layout>`
})

export class AppComponent { }
