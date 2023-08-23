import { Observable, of } from 'rxjs';

of('Alice', 'Ben', 'Charlie').subscribe({
  next: (name) => console.log(name),
  complete: () => console.log('Completed'),
});

//własna implementacja funkcji of dla pokazania ile się zaoszczędza
//oczywiście posiada ona więcej featureów ale podstawowe działanie jest
//właśnie takie
function ourOwnOf(...args: string[]): Observable<string> {
  return new Observable<string>((subscriber) => {
    for (let i = 0; i < args.length; i++) {
      subscriber.next(args[i]);
    }

    subscriber.complete();
  });
}

ourOwnOf('Alice', 'Ben', 'Charlie').subscribe({
  next: (name) => console.log(name),
  complete: () => console.log('Completed'),
});
