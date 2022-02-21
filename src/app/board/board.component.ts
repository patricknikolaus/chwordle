import { Component, OnInit } from '@angular/core';
import { words } from 'src/environments';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  public word!: string[];
  constructor() { }

  ngOnInit(): void {
    this.word = [];

  }

  addLetter(char: string) {
    this.word.push(char);
    console.log(this.word);
  }

  removeLetter() {
    this.word.pop();
  }

  clearWord() {
    this.word = [];
  }
}
