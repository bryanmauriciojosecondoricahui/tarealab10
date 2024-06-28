import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent {
  nombre: string = '';
  email: string = '';
  isFormValid: boolean = false;

  onSubmit() {
    const data = {
      nombre: this.nombre,
      email: this.email,
    };

    const dataString = JSON.stringify(data);
    const newWindow = window.open('', 'Datos del formulario', 'width=400, height=400');

    if (newWindow) {
      newWindow.document.write(`<pre>${dataString}</pre>`);
    } else {
      alert('No se pudo abrir la nueva ventana. Asegúrate de permitir ventanas emergentes en tu navegador.');
    }
  }

  updateSubmitButtonState() {
    this.isFormValid = this.nombre.length > 0 && this.email.length > 0;
  }

  confirmSubmit() {
    if (this.isFormValid && window.confirm('¿Estás seguro de enviar el formulario?')) {
      this.onSubmit();
    } else {
      alert('Por favor, completa todos los campos antes de enviar.');
    }
  }
}
