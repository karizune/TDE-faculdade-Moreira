import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/interfaces/small-interfaces/small-interfaces';

@Component({
  selector: 'app-pesquisa-itil',
  templateUrl: './pesquisa-itil.component.html',
  styleUrls: ['./pesquisa-itil.component.css']
})
export class PesquisaItilComponent implements OnInit {

  constructor() { }

  Area: string = "ITIL V4";

  items: Item[] = [
    {
      Title: "ITIL V4?",
      Body: "Atualmente estamos na versão 4 o qual nos trás novas mudanças para ajudar as empresas no mundo da transformação digital, e já está sendo visto a possibilidade da versão 5."
    },
    {
      Title: "Oque é o ITIL?",
      Body: "ITIL pode ser considerado como um conjunto de práticas detalhadas para se fazer um bom gerenciamento de serviços habilitados pela tecnologia da informação."},
    {
      Title: "Qual o propósito do ITIL atualmente?",
      Body: "O propósito da ITIL atualmente na versão 4, é oferecer às organizações uma estrutura prática e flexível como suporte na jornada rumo ao novo mundo da transformação digital, " +
            "ajudando a alinhar os recursos humanos, digitais e físicos para competir em um cenário moderno e complexo."
    },
    {
      Title: "Quem pode se beneficiar do uso do ITIL?",
      Body: "O ITIL V4 pode beneficiar qualquer organização que forneça um produto ou serviço habilitado (ou não) por TI."
    }
  ];

  ngOnInit(): void {
  }

  Redireciona(): void{
    window.open("https://www.google.com.br")
  }
}
