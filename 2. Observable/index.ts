import { filter, map, of, tap } from 'rxjs';

of(1, 7, 3, 6, 2)
  .pipe(
    filter((value) => value > 5),
    //operator tap pozwala zobaczyć co się dzieje na poszczególnych etapach
    tap((value) => console.log('Spy after filter: ', value)),
    map((value) => value * 2),
    tap((value) => console.log('Spy after map: ', value))
  )
  .subscribe((value) => console.log('Output: ', value));
