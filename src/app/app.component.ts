import { Component } from '@angular/core';
import { HeaderComponent } from './core/header/header.component';
import { HeroComponent } from './features/hero/hero.component';
import { AboutComponent } from './features/about/about.component';
import { SkillsComponent } from './features/skills/skills.component';
import { ExperienceComponent } from './features/experience/experience.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { ContactComponent } from './features/contact/contact.component';
import { OceanComponent } from './shared/components/ocean/ocean.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent,HeroComponent,AboutComponent,SkillsComponent,ExperienceComponent,ProjectsComponent,ContactComponent,OceanComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ocean-portfolio';
}
