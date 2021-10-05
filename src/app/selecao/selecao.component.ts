import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-selecao',
  templateUrl: './selecao.component.html',
  styleUrls: ['./selecao.component.css']
})
export class SelecaoComponent implements OnInit {

  @Input()
  titulo: string = '';
  @Input()
  opcoes: string[] = [];
  @Input()
  escolhaAte: number = 0;
  type: string = 'checkbox';
  selecionado: number = 0;

  @Input()
  escolhas: string[] = [];

  constructor() { }

  escolhasChange(item: string) {
    if (this.type === 'radio') {
      this.escolhas = []
      this.escolhas.push(item);
      return;
    }
    if (this.escolhas.includes(item)) {
      console.log(this.escolhas.includes(item), item)
      let index = this.escolhas.indexOf(item);
      this.escolhas.splice(index,1);
      return;
    }
    if (this.escolhas.length <= this.escolhaAte) {
      this.escolhas.push(item);
    }
  }

  ngOnInit(): void {
    if (this.escolhaAte == 1) {
      this.type = 'radio';
    }
  }

}
