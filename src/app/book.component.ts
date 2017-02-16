import {Component} from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
declare var document:any;
@Component({
    selector:'my-book',
    templateUrl: './app/book.component.html',
    styleUrls:['./app/book.component.css'],
})

export class BookComponent {
    bookForm: FormGroup;
    constructor(private _formBuilder:FormBuilder){
        this.bookForm = _formBuilder.group({
            id: new FormControl('004', Validators.required),
            name : new FormControl('안드로이드 게임 프로그래밍', 
                Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(50)])),
            price : new FormControl('', Validators.compose([this.validNumber])),
            date : new FormControl('', Validators.required)
        })
    }


    validNumber(c:FormControl){
        if (c.value == "")
        {
            return {
                valid :false,
                errorMsg:'필수로 입력하세요'
            }
        }
        let NUMBER_REGEXP = /^[0-9]/;
        return NUMBER_REGEXP.test(c.value) ?{
            valid:true,
            errorMsg:""
        }:{
            valid: false,
            errorMsg:'숫자로 입력하세요'
        };
    }
//    }
//   bookForm:FormGroup = new FormGroup({
//        id: new FormControl('004', Validators.required),
//        name : new FormControl('안드로이드 게임 프로그래밍', Validators.required),
//        price : new FormControl('', Validators.required),
//        date : new FormControl('', Validators.required)
    //dd})

    onSubmit(form:any){
        console.log(form.value)
    }
}

