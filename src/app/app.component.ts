// https://engineering.wisflux.com/eli5-understanding-rxjs-observables-4f99794dd701
// ELI5: Understanding RxJs Observables

import { Component } from '@angular/core';
// Import fromEvent method to create Observable
import { fromEvent } from 'rxjs/observable/fromEvent';

//import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent  {

  // Create an observable with click event
  observable = fromEvent(window, 'click');

  constructor(){
    let count = 0;
    // Subscribe to the observable
    this.observable.subscribe(() => console.log(`Hey! You clicked the window ${++count} times`));
  }

}

/*
You can create an observable from nearly anything, but the most common use case in RxJS is from events. 

This can be anything from mouse moves, button clicks, input into a text field, or even route changes.

e.g. Let’s try to understand this with an example of Water Taps. 

Water is always flowing through pipes to tap but only when a person turns the tap handle, water is then poured into a container. 

So, let’s say the pipe and the water in it is an observable; and turning the tap handle is an act of subscribing, and you can say that the container in which water is being poured is our observer.
*/

