import { Injectable } from '@angular/core';
import { Book } from './book';
import { Headers, Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class BookService {
    constructor(private http:Http){}
    getBooks() {
        return this.http.get('./server/book.json')
            .toPromise()
            .then(function (res:any){
                console.log( res)
                res.json().info.books
            });
    }
}
