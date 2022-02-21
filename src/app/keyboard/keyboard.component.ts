import { Component, OnInit } from '@angular/core';
import { keys } from 'src/environments'

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent implements OnInit {
  public row1 = keys.row1;
  public row2 = keys.row2;
  public row3 = keys.row3;
  public guess!: string[];
  constructor() { }

  ngOnInit(): void {
    this.guess = [];
  }

  passValue(char: string) {
    this.guess.push(char)
  }

  enter() {

  }

  delete() {
    this.guess.pop();
  }
}
