import { Observable } from 'rxjs';

const helloButton = document.querySelector('button#hello');

const helloButton$ = new Observable<MouseEvent>((subscriber) => {
  helloButton.addEventListener('click', (event: MouseEvent) => {
    subscriber.next(event);
  });
});

helloButton$.subscribe((event) =>
  console.log('Sub1: ', event.type, event.x, event.y)
);

helloButton$.subscribe((event) =>
  console.log('Sub2: ', event.type, event.x, event.y)
);

helloButton$.subscribe((event) =>
  console.log('Sub3: ', event.type, event.x, event.y)
);
