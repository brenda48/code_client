import {Pipe, PipeTransform} from '@angular/core';
import {ApiService} from '../services/api.service';

@Pipe({
  name: 'evenOddImpure'
})
export class EvenOddImpurePipe implements PipeTransform {
  private CacheResult: 'Pair' | 'Impair' | null = null;
  private CacheValue = 0;

  constructor(private api: ApiService) {
  }

  transform(value: number): any {
    this.CacheResult = null;
    console.log('1', this.CacheValue);
    console.log('1', value);
    if (this.CacheValue !== value) {
      console.log('2', this.CacheValue);
      console.log('2', value);
      this.CacheValue = value;
      const subscr = this.api.get_even_odd(value)
        .subscribe(
          result => {
            console.log(result);
            this.CacheResult = result;
            if (subscr) {
              subscr.unsubscribe();
            }

          });
      console.log('3', this.CacheValue);
      console.log('3', value);
    } else {
      this.CacheResult = 'Pair';
    }
    return this.CacheResult;
  }

}
