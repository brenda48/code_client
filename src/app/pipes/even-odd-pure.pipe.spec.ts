import { EvenOddPurePipe } from './even-odd-pure.pipe';

describe('EvenOddPurePipe', () => {
  it('create an instance', () => {
    const pipe = new EvenOddPurePipe();
    expect(pipe).toBeTruthy();
  });
});
