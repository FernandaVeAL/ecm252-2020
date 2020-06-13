import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  alunos = [];
  cursosNome = [
    {
      nome: 'Administração',
    },
    {
      nome: 'Design',
    },
    {
      nome: 'Engenharia de Alimentos',
    },
    {
      nome: 'Engenharia Química',
    },
    {
      nome: 'Engenharia Mecânica',
    },
    {
      nome: 'Engenharia Civil',
    },
    {
      nome: 'Engenharia de Controle e Automação',
    },
    {
      nome: 'Engenharia Elétrica',
    },
    {
      nome: 'Engenharia Eletrônica',
    },
    {
      nome: 'Engenharia de Computação',
    },
  ];

  captarInformacoes(alunoForm) {
    // const nome = alunoForm.value.nome;
    // const fone = alunoForm.value.fone;
    // const idade = alunoForm.value.idade;
    // const curso = alunoForm.value.curso;
    // console.log(
    //   `Nome: ${nome}, Fone: ${fone}, Idade: ${idade}, Curso: ${curso}`
    // );
    this.alunos = [
      {
        nome: alunoForm.value.nome,
        fone: alunoForm.value.fone,
        idade: alunoForm.value.fone,
        curso: alunoForm.value.curso,
      },
      ...this.alunos,
    ];
    console.log(alunoForm.value);
  }

  constructor() {}

  ngOnInit(): void {}
}
