import { fromEvent, of } from 'rxjs';
import { mergeMap, delay } from 'rxjs/operators';

// faking network request for save
const saveLocation = location => {
  return of(location).pipe(delay(500));
};
// streams
const click$ = fromEvent(document, 'click');

click$
  .pipe(
    mergeMap((e: MouseEvent) => {
      return saveLocation({
        x: e.clientX,
        y: e.clientY,
        timestamp: Date.now()
      });
    })
  )
  .subscribe(r => console.log('Saved!', r));