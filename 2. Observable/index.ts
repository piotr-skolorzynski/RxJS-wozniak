import { Observable } from 'rxjs';

const observable$ = new Observable((subscriber) => {
  console.log('Observable executed');
  subscriber.next('Alice');
  subscriber.next('Ben');
  setTimeout(() => {
    subscriber.next('Charlie');
    subscriber.complete();
  }, 2000);
});

console.log('Before subscribe');
observable$.subscribe({
  next: (value) => console.log(value),
  complete: () => console.log('Observable emission ended'),
});
console.log('After subscribe');
