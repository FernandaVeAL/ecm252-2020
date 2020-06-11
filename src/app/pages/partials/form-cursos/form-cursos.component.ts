import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form-cursos',
  templateUrl: './form-cursos.component.html',
  styleUrls: ['./form-cursos.component.css'],
})
export class FormCursosComponent {
  @Output() cursoAdicionado = new EventEmitter();

  adicionar(nome) {
    const cursoNome = {
      nome: nome,
    };
    this.cursoAdicionado.emit(cursoNome);
  }
}
