import { Observable } from 'rxjs';

const observable$ = new Observable<string>((subscriber) => {
  console.log('Observable executed');
  //observable will emit below 3 values
  subscriber.next('Alice');
  setTimeout(() => subscriber.next('Ben'), 2000);
  setTimeout(() => subscriber.next('Charlie'), 4000);
});

// const observer = {
//   next: (value: string) => console.log(value),
// };

// observable$.subscribe(observer);

const subscription = observable$.subscribe((value: string) =>
  console.log(value)
);

setTimeout(() => {
  subscription.unsubscribe();
  console.log('Subscription ended');
}, 3000);
