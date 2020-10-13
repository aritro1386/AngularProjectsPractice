import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-palindrome',
  templateUrl: './palindrome.component.html',
  styleUrls: ['./palindrome.component.css']
})
export class PalindromeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  checkPalindrome(input: string) {
    if (!input) {
      alert('Enter text to check');
    } else if (input.length === 1) {
      alert(`${input} is a Palindrome`);
    } else if (input.length > 1) {
      let index = 1;
      let isPalindrome = true;
      while (index <= (input.length / 2)) {
        if (input[index - 1] !== input[input.length - 1]) {
          isPalindrome = false;
          break;
        }
        index++;
      }
      const status = (isPalindrome) ? `is a` : `is not a`;
      alert(`${input} ${status} Palindrome`);
    } else {
      alert(`${input} is not a Palindrome`);
    }
  }

}
