import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/interfaces/small-interfaces/small-interfaces';

@Component({
  selector: 'app-outros',
  templateUrl: './outros.component.html',
  styleUrls: ['./outros.component.css']
})
export class OutrosComponent implements OnInit {

  constructor() { }

  Area: string = "Gestão e governança de TI";

  items: Item[] = [
    {
      Title: "Gestao estrategica de TI",
      Body: "A gestão estratégica de TI existe dentro da Governança de TI, que é um conjunto de práticas para gerir os recursos e ferramentas da área.\n" +
            "Por isso, seus objetivos são de otimizar tanto os processos quanto os resultados da empresa."
    },
    {
      Title: "Beneficios",
      Body: "A TI estratégia precisa ser proativa sobre os problemas que porem, estão e ainda podem acontecer dentro da empresa, encontrando solução para eles, melhorando e otimizando os processos antes que podem se tornar um problema que pode causar dor de cabeça dentro da empresa.\n\n" +
            "Além disso, um TI estratégico também traz mais dinamismo para as equipes e otimiza a produtividade do dia a dia de todas as áreas.\n\n" +
            "Um TI estratégico abre espaço para a implementação de ferramentas melhores e mais atuais. Assim você possa avaliar o desempenho dos seus times. Com isso, sua empresa terá acesso à métricas e indicadores e conseguirá tomar decisões de forma mais assertiva.\n\n" +
            "Por exemplo, ao incluir um software de atendimento na sua área de suporte, você poderá acompanhar o tempo médio de resposta dos seus agentes, o tempo de primeira resposta e a quantidade de tickets resolvidos todo mês. Com essa visão sistemática do seu negócio, você encontra um caminho pelo qual seguir para tomar decisões, resolver problemas e avaliar riscos."
    }
  ];

  ngOnInit(): void {
  }

}
