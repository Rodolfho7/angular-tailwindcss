import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  expanded = true;

  menuLateral(): void {
    this.expanded = !this.expanded;
  }
}
