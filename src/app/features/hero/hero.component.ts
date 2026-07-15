import { Component } from '@angular/core';
import { OceanComponent } from '../../shared/components/ocean/ocean.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [OceanComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

}
