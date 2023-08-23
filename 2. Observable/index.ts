import { Observable } from 'rxjs';

//empty Observable
const observable$ = new Observable((subscriber) => {
  console.log('Observable executed');
  subscriber.next('Alice');
});

console.log('Before subscribe');
observable$.subscribe({
  next: (value) => console.log(value),
});
console.log('After subscribe');
