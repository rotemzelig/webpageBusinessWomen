import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusnissWomenComponent } from './busniss-women.component';

describe('BusnissWomenComponent', () => {
  let component: BusnissWomenComponent;
  let fixture: ComponentFixture<BusnissWomenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusnissWomenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusnissWomenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
