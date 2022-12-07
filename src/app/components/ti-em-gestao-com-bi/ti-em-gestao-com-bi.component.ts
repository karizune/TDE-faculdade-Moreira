import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/interfaces/small-interfaces/small-interfaces';

@Component({
  selector: 'app-ti-em-gestao-com-bi',
  templateUrl: './ti-em-gestao-com-bi.component.html',
  styleUrls: ['./ti-em-gestao-com-bi.component.css']
})
export class TIEmGestaoComBIComponent implements OnInit {

  constructor() { }

  Area: string = "TI em gestão com BI e KM";
  items: Item[] = [
    {
      Title: "Oque é KM?",
      Body: "A gestão do conhecimento (KM na sigla em inglês) é o processo de criar, usar, compartilhar e gerenciar ativos e recursos de informação."
    },
    {
      Title: "Qual o objetivo da KM?",
      Body: "A KM ajuda a melhorar o desempenho, aumentar a vantagem competitiva, facilitar a inovação e incentivar o compartilhamento de conhecimento dentro de uma empresa."
    },
    {
      Title: "Oque é BI?",
      Body: "O BI (Business Intelligence) é uma metodologia que visa utilizar de análise de dados que é liderada pelo departamento de TI, o qual analisa os dados e gerando informações de valor para a gentão do negócio."
    },
    {
      Title: "Como o BI pode melhorar a gestão do meu negócio?",
      Body: "O BI é extremamente útil para melhorar a gestão do negócio, pois através de análises precisas de dados de todos as partes do negócio é possível verificar pontos relevantes que merecem receber atenção ou pontos de " +
            "interesse de alavancar o lucro da empresa entre outras melhorias como até mesmo ganho de performance do trabalho, pois com os dados precisos de tudo que pode estar acontecendo com a empresa, pode se detectar pontos a serem " +
            "aprimorados."
    },
    {
      Title: "Como o BI e KM podem ser usados juntos?",
      Body: "Os dois são metodologias o qual utiliza-se de recursos de informações da empresa para realizar uma gestão, o qual o BI pode oferecer relatórios e informações de grande valor onde pode ser detectado pontos de importância para realizar uma determinada gestão " +
            "e o KM é uma metodologia o qual irá gerir esse conhecimento, onde que quando for gerado através de BI, esse conhecimento se tornará muito mais rico para ser gerido de forma muito mais eficiente."
    }
  ];

  ngOnInit(): void {
  }

  Redireciona(): void{
    window.open("https://netsupport.com.br/bi-em-ti/");
    window.open("https://www.capterra.com.br/glossary/634/km-knowledge-management");
    window.open("https://www.findup.com.br/bi-big-data-gestao-de-negocios/");
    window.open("https://revista.ibict.br/ciinf/article/view/1191/1362");
  }
}
