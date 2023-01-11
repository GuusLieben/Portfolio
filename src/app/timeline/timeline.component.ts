import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent {

  @Input()
  entries: TimelineEntry[] = [];

  formatPeriod(period: TimelinePeriod) {
    return period.start + (period.end ? (' - ' + period.end) : '');
  }
}

export type TimelineEntry = {
  name: string;
  logo: string;
  location?: string;
  activities: TimelineActivity[];
  period?: TimelinePeriod;
}

export type TimelineActivity = {
  title: string;
  period: TimelinePeriod;
  description?: string;
  keywords?: string[];
}

export type TimelinePeriod = {
  start: string;
  end?: string;
}
