import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  // here we created new props 
  @Input() text: string;
  @Input() color: string;

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
   console.log("hello world")
  }

}