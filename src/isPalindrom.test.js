import { isPalindrom } from './isPalindrom';

describe('isPalindrom', () => {
  it('returns true when the string is a palindrom', () => {
    expect(isPalindrom("anna")).toBeTruthy();
    expect(isPalindrom("civic")).toBeTruthy();
  });

  it('handles multiple words/spaces', () => {
    expect(isPalindrom("my gym")).toBeTruthy();
    expect(isPalindrom("step on no pets")).toBeTruthy();
  });

  it('returns false when the string is not a palindrom', () => {
    expect(isPalindrom("dog")).toBeFalsey();
  });

  it('is not case-sensitive', () => {
    expect(isPalindrom("Anna")).toBeTruthy();
  });

  it('returns null if the argument is not a string', () => {
    expect(isPalindrom()).toBeNull();
    expect(isPalindrom('')).toBeNull();
    expect(isPalindrom(1)).toBeNull();
    expect(isPalindrom(['foo'])).toBeNull();
    expect(isPalindrom({foo: 'bar'})).toBeNull();
    expect(isPalindrom(null)).toBeNull();
    expect(isPalindrom(undefined)).toBeNull();
  });
});
