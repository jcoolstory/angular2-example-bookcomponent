import {Component, OnInit} from '@angular/core';
import {BookService} from './book.service';
import {Book} from './book';
import 'rxjs/add/operator/toPromise';
@Component({
    selector:'my-book',
    templateUrl: './app/book.component.html',
    styleUrls:['./app/book.component.css'],
    providers:[BookService]
})

export class BookComponent {
    books:Book[];
    constructor(private bookService:BookService){}
    ngOnInit(){
        this.bookService.getBooks()
            .then( function(xx) { console.log(arguments)} ) ;
    }
}
