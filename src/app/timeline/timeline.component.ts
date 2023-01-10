import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent {

  @Input()
  entries: TimelineEntry[] = [];

}

export type TimelineEntry = {
  name: string;
  logo: string;
  location: string;
  activities: TimelineActivity[];
}

export type TimelineActivity = {
  title: string;
  period: { start: string; end?: string; }
  description: string;
  keywords: string[];
}
