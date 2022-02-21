import { Component, OnInit } from '@angular/core';
import { words } from 'src/environments';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  public answer!: string[];
  public words = words;
  constructor() { }

  ngOnInit(): void {
    let i = Math.floor(Math.random() * this.words.length)
    this.answer = this.words[i].toUpperCase().split('');
    console.log(this.answer)
  }

}
