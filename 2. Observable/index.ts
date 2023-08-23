import { Observable } from 'rxjs';

//empty Observable
const observable$ = new Observable((subscriber) => {
  console.log('Observable executed');
});

console.log('Before subscribe');
observable$.subscribe();
console.log('After subscribe');
