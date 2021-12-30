import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
  
  
    trigger('fade', [
      state('show', style({
        opacity: 1
      })),
      state('hide',   style({
        opacity: 0
      })),
      transition('show => hide', animate('600ms ease-out')),
      transition('hide => show', animate('1000ms ease-in'))
    ])
  
  
  ],
  
  
})
export class HomeComponent implements OnInit {
  show = false

  constructor() {

    setTimeout(() => 
    {
        this.toggle();
    },
    500);

  }

  get stateName(){
    return this.show ? 'show' : 'hide'
  }

  toggle() {
    this.show = !this.show;
  }
  ngOnInit(): void {}
}
