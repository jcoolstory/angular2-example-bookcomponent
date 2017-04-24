import {Component} from '@angular/core';
@Component({
    selector:'book',
    templateUrl: './app/book.component.html',
    styleUrls:['./app/book.component.css'],
})

export class BookComponent {
    book = {
        id:'',
        name : '',
        price:0,
        date : '',
        img : ''
    };

    constructor() {
        this.setBook('001');
    }

    setBook(id:any){
        for (var i = 0 ; i < this.books.length ; i++){
            if (id == this.books[i].id ) {
                this.book = this.books[i];
                console.log(this.book)
                break;
            }
        }
    }

    books = [
        {id:'001', name:'타이젠 모바일 프로그래밍', price:31500,date:'20150115',img:'img001.jpg'},
        {id:'002', name:'아파치 코르도바', price:31500,date:'20150131',img:'img002.jpg'},
        {id:'003', name:'웹앱 하이브리드 앱', price:31500,date:'20150320',img:'img003.jpg'},
        {id:'004', name:'OpenGL ES 2.0 안드로이드 게임프로그래밍', price:31500,date:'20150601',img:'img004.jpg'},
        {id:'005', name:'Ext JS6 프로그래밍', price:31500,date:'20151005',img:'img005.jpg'}
    ]  
}
