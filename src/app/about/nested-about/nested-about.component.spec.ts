import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedAboutComponent } from './nested-about.component';

describe('NestedAboutComponent', () => {
  let component: NestedAboutComponent;
  let fixture: ComponentFixture<NestedAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestedAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
