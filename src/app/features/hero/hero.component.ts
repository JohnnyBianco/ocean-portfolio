import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  scroll = 0;

  @HostListener('window:scroll')
  onScroll() {

    this.scroll = window.scrollY;

  }

}
