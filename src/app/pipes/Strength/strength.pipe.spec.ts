import { StrengthPipe } from './strength.pipe';

describe('StrengthPipe', () => {
  it('create an instance', () => {
    const pipe = new StrengthPipe();
    expect(pipe).toBeTruthy();
  });

  it('should display weak if 5 is passed as a value', () => {
    
    const pipe = new StrengthPipe();
    expect(pipe.transform(5)).toEqual('5 (weak)')

  })

  it('should display strong if 10 is passed as a value', () => {
    
    const pipe = new StrengthPipe();
    expect(pipe.transform(10)).toEqual('10 (strong)')

  })

  it('should display strongest if 20 is passed as a value', () => {
    
    const pipe = new StrengthPipe();
    expect(pipe.transform(20)).toEqual('20 (strongest)')

  })
});
