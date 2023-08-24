import { forkJoin, Observable } from 'rxjs';

const a$ = new Observable((subscriber) => {
  setTimeout(() => {
    subscriber.next('A');
    subscriber.complete();
  }, 3000);
});

const b$ = new Observable((subscriber) => {
  setTimeout(() => {
    subscriber.error('Failure!');
  }, 5000);
});

forkJoin([a$, b$]).subscribe({
  next: (value) => console.log(value),
  error: (err) => console.log('Error: ', err),
});
