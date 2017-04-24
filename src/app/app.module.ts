import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing }       from './app.routing';
import { AppComponent }  from './app.component';
import { BooksComponent }from './books.component';
import { BookComponent } from './book.component';
@NgModule({
  imports:      [ BrowserModule, routing ],
  declarations: [ AppComponent, BookComponent, BooksComponent],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
