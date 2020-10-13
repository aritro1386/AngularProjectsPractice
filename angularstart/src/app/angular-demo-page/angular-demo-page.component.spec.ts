import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularDemoPageComponent } from './angular-demo-page.component';

describe('AngularDemoPageComponent', () => {
  let component: AngularDemoPageComponent;
  let fixture: ComponentFixture<AngularDemoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularDemoPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularDemoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
