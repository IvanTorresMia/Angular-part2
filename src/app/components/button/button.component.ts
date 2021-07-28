import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  // here we created new props 
  @Input() text: string;
  @Input() color: string;
  // took an output (reusable output), then emit has it do something
  // in other words we are making this button resuable
  @Output() btnClick = new EventEmitter()

  constructor() { 
    
  }

  ngOnInit(): void {

  }

  onClick() {
   this.btnClick.emit()
  }

} 