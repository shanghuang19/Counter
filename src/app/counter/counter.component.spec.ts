import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';
import { By } from '@angular/platform-browser';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterComponent]
    });
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should increase number when call OnIncrease', () => 
  {
    component.number = 2
    component.OnIncrease()
    expect(component.number).toEqual(3)
  })

  it('should increase number when click add button', () =>
  {
    component.number = 2
    fixture.debugElement.query(By.css('button')).triggerEventHandler('click')
    fixture.detectChanges()

    const text = fixture.debugElement.query(By.css('span')).nativeElement.textContent
    expect(text).toEqual('number: 3')
  })

  it('should IsShowIncreaseButton be true show button when number <= 10', () =>
  {
    component.number=2
    expect(component.IsShowIncreaseButton).toBeTruthy()
  })

  it('should false >10', () =>
  {
    component.number = 11
    expect(component.IsShowIncreaseButton).toBeFalsy()
  })
});
