import { EvenOddImpurePipe } from './even-odd-impure.pipe';

describe('EvenOddImpurePipe', () => {
  it('create an instance', () => {
    const pipe = new EvenOddImpurePipe();
    expect(pipe).toBeTruthy();
  });
});
