import { timer, interval } from 'rxjs';

timer(2000).subscribe({
  next: (value) => console.log('Timer: ', value),
  complete: () => console.log('Timer Completed'),
});

const subscription = interval(1000).subscribe({
  next: (value) => console.log('Interval: ', value),
  complete: () => console.log('Interval Completed'),
});

setTimeout(() => subscription.unsubscribe(), 5000);
