import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[miDirectiva]' // Corregido: selector debe estar dentro del objeto de configuración de @Directive
})
export class MiDirectivaDirective {
  constructor() { }

  @HostListener('click', ['$event'])
  onClick(event: any) {
    console.log('Mi directiva fue clickeada');
  }
}
