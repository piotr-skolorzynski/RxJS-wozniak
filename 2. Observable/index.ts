import { catchError, fromEvent, EMPTY } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { concatMap, map } from 'rxjs/operators';

const endpointInput: HTMLInputElement =
  document.querySelector('input#endpoint');
const fetchButton = document.querySelector('button#fetch');

fromEvent(fetchButton, 'click')
  .pipe(
    map(() => endpointInput.value),
    concatMap((value) =>
      ajax(`https://random-data-api.com/api/${value}/random_${value}`)
    ),
    catchError(() => EMPTY)
  )
  .subscribe({
    next: (value) => console.log(value),
    complete: () => console.log('Completed!'),
  });
