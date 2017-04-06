import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';
import { BookComponent } from './book.component';
import { BookService }   from './book.service';
import './rxjs-extension';
@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, BookComponent],
  bootstrap:    [ AppComponent ],
  providers:    [ BookService ],
})
export class AppModule { }
