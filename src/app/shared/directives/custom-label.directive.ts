import { Directive, ElementRef, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]',
  /* standalone: true, */
})
export class CustomLabelDirective { 

  private htmlElement?: ElementRef<HTMLElement>;
  private _color: string = 'red';
  private _errors?: ValidationErrors | null | undefined;

  @Input() set color(value: string){
    this._color = value;
    this.setStyle();
  }

  @Input() set errors(value: ValidationErrors | null | undefined){
    this._errors = value;
    this.setErrorMessage();
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

  setErrorMessage(): void{
    if(!this.htmlElement) return;
    if(!this._errors) {
      this.htmlElement!.nativeElement.innerText = 'No hay errores';
      return;
    }

    console.log(this._errors);

    const errors = Object.keys(this._errors);
    console.log(errors);

    if(errors.includes('required')){
      this.htmlElement!.nativeElement.innerText = 'Este campo es requerido';
      return;
    }

    if(errors.includes('minlength')){

      const minLength = this._errors!['minlength']['requiredLength'];
      const currentLength = this._errors!['minlength']['actualLength'];

      this.htmlElement!.nativeElement.innerText = `Minimo ${currentLength}/${minLength} cracteres`;
      return;
    }

    if(errors.includes('email')){
      this.htmlElement!.nativeElement.innerText = 'No tiene formato de correo';
      return;
    }
  }
}
