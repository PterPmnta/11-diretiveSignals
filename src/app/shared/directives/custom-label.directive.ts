import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[customLabel]',
  /* standalone: true, */
})
export class CustomLabelDirective { 

  private htmlElement?: ElementRef<HTMLElement>;

  constructor(private el: ElementRef<HTMLElement>) { 
    /* console.log('CustomLabelDirective'); */
    console.log(el);
    this.htmlElement = el;
    this.htmlElement.nativeElement.innerHTML = 'Custom Label'
  }
}
