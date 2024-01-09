import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRedColorElement]'
})
export class RedColorElementDirective {

  constructor(ref:ElementRef) {
    ref.nativeElement.style.color="red",
    ref.nativeElement.innerText="Value Changed"
    ref.nativeElement.innerText.disabled = true;
   }

}
