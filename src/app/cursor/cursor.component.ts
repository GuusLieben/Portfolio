import {AfterViewInit, Component, ElementRef, Input, ViewChild} from '@angular/core';
import {gsap} from "gsap";
import {deviceType} from "detect-it";

@Component({
  selector: 'app-cursor',
  templateUrl: './cursor.component.html',
  styleUrls: ['./cursor.component.scss']
})
export class CursorComponent implements AfterViewInit {

  @Input()
  shake?: HTMLSpanElement;

  @ViewChild('ballBig')
  bigBall?: ElementRef;

  @ViewChild('ballSmall')
  smallBall?: ElementRef;

  ngAfterViewInit(): void {
    if (deviceType === 'mouseOnly') {
      document.body.addEventListener('mousemove', this.onMouseMove.bind(this));
      document.body.classList.add('no-cursor');
      this.adaptLinks();
      this.adaptElement(this.shake!, 1.5);
    }
    else {
      this.bigBall!.nativeElement.style.display = 'none'
      this.smallBall!.nativeElement.style.display = 'none'
    }
  }

  onMouseMove(event: MouseEvent) {
    if (this.bigBall) {
      gsap.to(this.bigBall.nativeElement, .4, {
        x: event.clientX - 20,
        y: event.clientY - 20
      });
    }

    if (this.smallBall) {
      gsap.to(this.smallBall.nativeElement, .1, {
        x: event.clientX - 5,
        y: event.clientY - 12
      });
    }
  }

  public adaptLinks() {
    const links = document.body.getElementsByTagName('a');
    for (let i = 0; i < links.length; i++) this.adaptElement(links[i], 4);
  }

  private adaptElement(element: HTMLElement, scale: number) {
    element.addEventListener('mouseenter', () => {
      gsap.to(this.bigBall!.nativeElement, .3, {
        scale: scale
      })
    });
    element.addEventListener('mouseleave', () => {
      gsap.to(this.bigBall!.nativeElement, .3, {
        scale: 1
      })
    });
  }
}
