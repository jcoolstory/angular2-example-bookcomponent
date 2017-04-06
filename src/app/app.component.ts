import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
    <input type="text" value="{{myValue}}">
    <my-book></my-book>
  `,
})

export class AppComponent { 
    myValue:string = "App";

    name = 'Angular'; 
}

