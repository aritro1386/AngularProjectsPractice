import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RomanNumeralConvertorComponent } from './roman-numeral-convertor.component';

describe('RomanNumeralConvertorComponent', () => {
  let component: RomanNumeralConvertorComponent;
  let fixture: ComponentFixture<RomanNumeralConvertorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RomanNumeralConvertorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RomanNumeralConvertorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
