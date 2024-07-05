import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[customLabel]',
  /* standalone: true, */
})
export class CustomLabelDirective { 

  private htmlElement?: ElementRef<HTMLElement>;
  private _color: string = 'red';

  @Input() set color(value: string){
    this._color = value;
    this.setStyle();
  }

  constructor(private el: ElementRef<HTMLElement>) { 
    /* console.log('CustomLabelDirective'); */
    /* console.log(el); */
    this.htmlElement = el;
  }

  setStyle():void {
    if(!this.htmlElement) return;
    this.htmlElement!.nativeElement.style.color = this._color;
  }
}
