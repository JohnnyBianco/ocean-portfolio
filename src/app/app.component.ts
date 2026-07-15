import { Component } from '@angular/core';
import { HeaderComponent } from './core/header/header.component';
import { HeroComponent } from './features/hero/hero.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent,HeroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ocean-portfolio';
}
