import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'edge-color-picker';
  public isSwitcherShown = false;

  toggleThemeSwitcher() {
    this.isSwitcherShown = !this.isSwitcherShown;
  }
}
