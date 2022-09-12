import { Component, OnInit } from '@angular/core';
import { PerguntaResposta } from '../../interfaces/small-interfaces/small-interfaces'

@Component({
  selector: 'app-entrevista',
  templateUrl: './entrevista.component.html',
  styleUrls: ['./entrevista.component.css']
})
export class EntrevistaComponent implements OnInit {

  constructor() { }

  Area: string = "Entrevista com gestor de TI";

  entrevista: PerguntaResposta[] = [
    {
      Numero: 1,
      Pergunta: "O que te interessa nesta posição?",
      Resposta: "Sendo sincero, eu gosto de mandar e eu confio nas minhas decisões pelo bem da empresa."
    },
    {
      Numero: 2,
      Pergunta: "Como você lida com prazos?",
      Resposta: "Aplicando o Scrum para controle das demandas. Quando o prazo é demasiadamente curto, eu atuo como desenvolvedor também afim de cooperar e garantir a entrega. O resultado pra mim é a prioridade, independente do meio."
    },
    {
      Numero: 3,
      Pergunta: "Você enviou um código que quebrou o site do cliente. Qual o seu próximo passo?",
      Resposta: "Executar o rollback/redeploy da versão mais estável o mais rápido possível enquanto sustentação é acionada para corrigir o problema na sua causa raiz. A prioridade sempre será não ter impeditivos de venda no site."
    },
    {
      Numero: 4,
      Pergunta: "Você encontrou um bug enquanto estava fazendo testes e ninguém sabe sobre ele. O que faria nesta situação?",
      Resposta: "Reportaria o bug para o time responsável para o devido tratamento."
    },
    {
      Numero: 5,
      Pergunta: "Quais desafios potenciais você espera com esse emprego?",
      Resposta: "O maior desafio de liderar é que os resultados não dependem apenas de você.\n" + 
                "Você é o resultado de um time e precisa manter esse time todo produzindo, considerando que nesse time estará pessoas com talentos e personalidades extremamente diversificados.\n" + 
                "Também é passar a tarefa certa para a pessoa certa, saber delegar as atividades afim de obter mais e mais resultados."
    },
    {
      Numero: 6,
      Pergunta: "Como você descreve o ambiente de trabalho ideal?",
      Resposta: "O ambiente ideal de trabalho é aquele que provoca a melhoria contínua dos processos e pessoas.\n" + 
                "Cada caso é um caso, cada pessoa tem seu ritmo e seus talentos, cabe a nós identifica-los e motivá-los nesse âmbito para o time ser extremamente produtivo."
    },
    {
      Numero: 7,
      Pergunta: "Qual sua estratégia para conseguir manter sua equipe engajada nos projetos?",
      Resposta: "O primeiro passo é conhecer quem são os liderados.\n" +
                "Cada pessoa reage de forma diferente ao mesmo problema e com o mesmo estímulo.\n" +
                "Portanto, enquanto para alguns um elogio é a parte principal, para outros o feedback do que ele precisa melhorar e muito mais valioso.\n" +
                "Cabe a nós conhecer cada membro do time e mante-los com energia e motivação.\n" +
                "Também cabe ao líder aprimorar os membros do seu time com novos desafios observando os pontos fortes e fracos de cada um.\n" +
                "Cada pessoa é diferente, e essa que é a beleza deste cargo, é como se você vivesse uma aventura diferente com cada membro em uma jornada."
    }
  ];

  ngOnInit(): void {
  }

  openLinkedin(): void{
    window.open("https://www.linkedin.com/in/victor-emanuel-alves-00973516b/");
  }

}
