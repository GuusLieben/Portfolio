import {Component, ElementRef, ViewChild} from '@angular/core';
import {Skill, skills} from "./skills";
import {FocusElement} from "./focus-element/focus-element.component";
import {experience} from "./experience";
import {TimelineEntry} from "./timeline/timeline.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('shakeSpan')
  shakeSpan?: ElementRef;

  skills: Skill[] = skills;
  experience: TimelineEntry[] = experience;

  highlightAspects: [FocusElement, FocusElement, FocusElement, FocusElement] = [
    {
      title: 'Dependency Injection',
      description: 'Hartshorn provides a powerful dependency injection system that allows for the creation of complex applications with ease.',
      image: 'assets/svg/box.svg',
    },
    {
      title: 'Component Lifecycle',
      description: 'Hartshorn provides a powerful component lifecycle system that allows components to be created, destroyed, managed, and observed with ease.',
      image: 'assets/svg/cycle.svg',
    }, {
      title: 'Custom Expression Language',
      description: 'HSL is a custom scripting- and expression language that was designed to be used in Hartshorn applications.',
      image: 'assets/svg/language.svg',
      url: 'https://github.com/Dockbox-OSS/Hartshorn/pull/771',
    }, {
      title: 'Scalable',
      description: 'Hartshorn is designed to be scalable, this is done by providing a modular and efficient application architecture',
      image: 'assets/svg/scale.svg',
    }
  ]

  shake() {
    document.body.classList.add('shake');
    setTimeout(() => {
      document.body.classList.remove('shake');
    }, 1000);
  }
}
