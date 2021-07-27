import { Component } from '@angular/core';

@Component({
  // this is the tag you will use to call the component in other components
  selector: 'app-root',
  // just telling it to use this HTML file
  templateUrl: './app.component.html',
  // Just telling it to use this CSS File
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'task tracker';
}
