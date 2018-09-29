import { getLetterMatchCount } from './index';


describe( 'getLetterMatchCount', () => {
  const secretWord = 'party';
  test('return correct count where there are no matching letters', () => {
    const letterMatchCount = getLetterMatchCount('bones', secretWord);
    expect(letterMatchCount).toBe(0);

  });
  test('return the correct count there there are 3 matching letters', () => {
    const letterMatchCount = getLetterMatchCount('train', secretWord);
    expect(letterMatchCount).toBe(3);
  });
  test('return the correct count there there duplicate letters in the guess', () => {
    const letterMatchCount = getLetterMatchCount('parka', secretWord);
    expect(letterMatchCount).toBe(3);
  });
});