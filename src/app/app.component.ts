import {Component} from '@angular/core';
import {Skill, skills} from "./skills";
import {FocusElement} from "./focus-element/focus-element.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  skills: Skill[] = skills;

  highlightAspects: [FocusElement, FocusElement, FocusElement, FocusElement] = [
    {
      title: 'Dependency Injection',
      description: 'Hartshorn provides a powerful dependency injection system that allows for the creation of complex applications with ease.',
      image: 'assets/svg/box.svg',
    },
    {
      title: 'Component Lifecycle',
      description: 'TBD',
      image: 'assets/svg/cycle.svg',
    }, {
      title: 'Custom Expression Language',
      description: 'HSL is a custom scripting- and expression language that was designed to be used in Hartshorn applications.',
      image: 'assets/svg/language.svg',
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
