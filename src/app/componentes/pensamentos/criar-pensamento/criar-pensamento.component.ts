import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  pensamento = {
    conteudo: "Hey you! Yo Yo",
    autoria: "HebIO",
    modelo: "modelo3",
  }

  constructor() { }

  ngOnInit(): void {
  }

  criaPensamento() {
    alert('Criando pensamento');
  }

  cancelaPensamento() {
    alert('Cancelando pensamento');
  }
}
