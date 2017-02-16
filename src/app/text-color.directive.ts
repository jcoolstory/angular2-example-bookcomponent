import { Directive, ElementRef, Renderer, HostListener, Input } from '@angular/core';
@Directive ({
    selector:'[text-color]'
})


export class TextColorDirective {
    @Input('text-color') color:string;
    constructor(private el:ElementRef, private renderer:Renderer) {
    }

    @HostListener('focus') onFocus(){
        this.renderer.setElementStyle(
            this.el.nativeElement,
            'background', this.color);
    }
    @HostListener('blur') onBlur(){
        this.renderer.setElementStyle(
            this.el.nativeElement,
            'background','white'
            );
        console.log(this.el);
    }
}
