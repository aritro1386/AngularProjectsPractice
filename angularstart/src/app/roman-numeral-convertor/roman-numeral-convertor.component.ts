import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roman-numeral-convertor',
  templateUrl: './roman-numeral-convertor.component.html',
  styleUrls: ['./roman-numeral-convertor.component.css']
})
export class RomanNumeralConvertorComponent implements OnInit {
  convertedValue = '';
  romanMapping = {
    1: 'I',
    5: 'V',
    10: 'X',
    50: 'L',
    100: 'C'
  };

  constructor() { }

  ngOnInit(): void {
  }

  convertToRoman(value: string) {
    const input = parseInt(value);
    if (this.romanMapping[input]) {
      this.convertedValue = this.romanMapping[input];
    } else if ((input % 10 === 0)) {
      if (input < 50) {
        const tens = input / 10;
        let roman = '';
        for (let i = 0; i < tens; i++) {
          roman += this.romanMapping[10];
        }
        this.convertedValue = roman;
      } else if (input > 50 && input < 100) {
        const tens = (input - 50) / 10;
        let roman = this.romanMapping[50];
        for (let i = 0; i < tens; i++) {
          roman += this.romanMapping[10];
        }
        this.convertedValue = roman;
      }
    } else {
      const minusValue = (value.length * 10) - input;
    }
  }

  checkInput(input) {
    if (!/[0-9]/.test(input.value)) {
      input.value = '';
    }
  }

}
