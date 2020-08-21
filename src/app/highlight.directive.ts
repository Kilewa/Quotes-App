import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(elem:ElementRef) {
    elem.nativeElement.style.backgroundColor="#457052"
    elem.nativeElement.style.padding="10px"
    elem.nativeElement.style.borderRadius="5px"
  }

}
