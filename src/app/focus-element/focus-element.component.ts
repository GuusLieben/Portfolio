import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-focus-element',
  templateUrl: './focus-element.component.html',
  styleUrls: ['./focus-element.component.scss']
})
export class FocusElementComponent {

  @Input()
  public element?: FocusElement;

}

export type FocusElement = {
  title: string;
  image: string;
  description: string;
}
