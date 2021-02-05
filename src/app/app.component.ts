import { Component, ViewChild, ElementRef } from "@angular/core";

declare var tableau: any; //declaração da viriável tableau

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})

export class AppComponent {
  
  viz: any; //component variable: conter objeto/variável viz

  @ViewChild("vizContainer") //property decorator //consulta de visualização; variável de referência como string: vizContainer
  //ViewChild é usado para consultar e obter a referência do elemento DOM no componente. Retorna o primeiro elemento correspondente.

  containerDiv!: ElementRef;
  //ElementRef é um wrapper em torno de um objeto DOM nativo; ele ccontém a propriedade NativeElement, que contém a referência ao objeto DOM. 
  //Usa o ViewChild para obter o ElementRef de um elemento HTML na classe do componente.

  ngAfterViewInit() { //ViewChild não é disponível quando o componente pai começa a renderizar; e não ficará disponível no clico do ngOnInit()
    this.initViz();
  }


  //Função para mostrar a vizualização do Tableau
  initViz() {
    // const containerDiv = document.getElementById("vizContainer");
    const vizUrl = "https://public.tableau.com/views/COVID-19Cases_15840488375320/COVID-19GlobalView?:language=pt&:display_count=y&:origin=viz_share_link"; //variável que contém o link do painel

    const options = {
      hideTabs: true,
      onFirstInteractive: () => {
        console.log("Run this code when the viz has finished loading");
      }
    };

    this.viz = new tableau.Viz(         //variável viz recebe o construtor Viz
      this.containerDiv.nativeElement,  //passa as referências para a div que contém a vizualização
      vizUrl,   //referência link
      options //referência opções
    );
  }
}
