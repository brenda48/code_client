import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'evenOddPure',
  pure: true,
})
export class EvenOddPurePipe implements PipeTransform {

  private result: 'Pair' | 'Impair' | null = null;

    transform(value: number): string {
        if (value % 2 === 0) {
            this.result = 'Pair';
        } else {
            this.result = 'Impair';
        }
        return this.result;
    }
}
