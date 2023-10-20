import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroTwoComponent } from './hero-two.component';

describe('HeroTwoComponent', () => {
  let component: HeroTwoComponent;
  let fixture: ComponentFixture<HeroTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroTwoComponent]
    });
    fixture = TestBed.createComponent(HeroTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
