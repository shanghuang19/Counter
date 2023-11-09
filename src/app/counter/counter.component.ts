import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  number = 0
  OnIncrease()
  {
    this.number++
  }
  OnDecrease()
  {
    this.number--
  }
  get IsShowIncreaseButton()
  {
    return this.number <= 10
  }

  get IsShowDecreaseButton()
  {
    return this.number >= 0
  }

  get TextBackgroundColor()
  {
    if (this.number > 10)
    {
      return 'red'
    }
    else if (this.number < 0)
    {
      return 'green'
    }
    return ''
  }

  Reset()
  {
    this.number=0
    return this.number
  }
}
