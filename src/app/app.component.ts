import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  posts = [
    {
      title: 'Neat Tree',
      username: 'nature',
      content: 'I saw this neat tree today',
      imageUrl: 'assets/tree.jpeg',
    },
    {
      title: 'Snowy Mountain',
      username: 'hikingperson',
      content: 'Here is a picture of a snowy mountain',
      imageUrl: 'assets/mountain.jpeg',
    },
    {
      title: 'Neat Tree',
      username: 'biking12222',
      content: 'Action shot of me riding my bike',
      imageUrl: 'assets/biking.jpeg',
    },
  ];
}
