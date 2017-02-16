import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { BookComponent } from './book.component';
import { BookImageComponent } from './book-image.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextSizeDirective } from './text-size.directive';
import { TextColorDirective } from './text-color.directive';                    


@NgModule({
  imports:      [ BrowserModule,FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, BookComponent,BookImageComponent, TextSizeDirective, TextColorDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
