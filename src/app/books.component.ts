import { Component } from '@angular/core';
@Component ({
    selector : 'books',
    templateUrl : './app/books.component.html'
    //styleUrls : ['./assets/styleseets/books.css']
})

export class BooksComponent {
    constructor(){
        for (var book of this.books) {
            this.booksResult.push(book);
        }
    }

    searchName($event:any){
        console.log($event);
        var searchName = $event.target.value;
        this.booksResult = [];
        if (searchName = ''){
            for (var book of this.books) {
                this.booksResult.push(book);
            }
        }
        else {
            for (var book of this.books) {
                if (book.name.indexOf(searchName) != -1 ) {
                    this.booksResult.push(book);
                }
            }
        }
    }


booksResult = [];
books = [
        {id:'001', name:'타이젠 모바일 프로그래밍', price:31500,date:'20150115',img:'img001.jpg'},
        {id:'002', name:'아파치 코르도바', price:31500,date:'20150131',img:'img002.jpg'},
        {id:'003', name:'웹앱 하이브리드 앱', price:31500,date:'20150320',img:'img003.jpg'},
        {id:'004', name:'OpenGL ES 2.0 안드로이드 게임프로그래밍', price:31500,date:'20150601',img:'img004.jpg'},
        {id:'005', name:'Ext JS6 프로그래밍', price:31500,date:'20151005',img:'img005.jpg'}
    ]  
}
