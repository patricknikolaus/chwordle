import { Component, OnInit, Output } from '@angular/core';
import { keys } from 'src/environments'
import { words } from 'src/environments';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent implements OnInit {
  @Output() newGuess = new EventEmitter();
  @Output() backspace = new EventEmitter();
  @Output() clearGuess = new EventEmitter();
  public row1 = keys.row1;
  public row2 = keys.row2;
  public row3 = keys.row3;
  public guess!: string[];
  public answer!: string[];
  public words = words;
  constructor() { }

  ngOnInit(): void {
    this.guess = [];
    let i = Math.floor(Math.random() * this.words.length)
    this.answer = this.words[i].toUpperCase().split('');
    console.log(this.answer)
  }

  passValue(char: string) {
    this.guess.push(char)
    this.newGuess.emit(char);
  }

  enter() {
    this.guess.forEach((char1, i) => {
      this.answer.forEach((char2, j) => {
        if (char1 === char2 && i === j) {
          console.log(char1, 'green')
          return;
        } else if (char1 === char2 && i != j) {
          console.log(char1, 'yellow')
          return;
        } else {
          console.log('not in word')
        }
      })
    })
    this.clearGuess.emit();
  }

  delete() {
    this.guess.pop();
    this.backspace.emit();
  }
}
