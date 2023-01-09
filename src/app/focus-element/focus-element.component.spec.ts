import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FocusElementComponent } from './focus-element.component';

describe('FocusElementComponent', () => {
  let component: FocusElementComponent;
  let fixture: ComponentFixture<FocusElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FocusElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FocusElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
