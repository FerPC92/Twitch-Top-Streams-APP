import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamersViewComponent } from './streamers-view.component';

describe('StreamersViewComponent', () => {
  let component: StreamersViewComponent;
  let fixture: ComponentFixture<StreamersViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StreamersViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamersViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
