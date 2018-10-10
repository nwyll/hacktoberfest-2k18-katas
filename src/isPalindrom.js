//returns true if string is a palindrom and false if not
export const isPalindrom = (str) => {
  //return if a string is not passsed in
  if(typeof(str) !== String) return null;

  //otherwise, compare reversed string to original and directly return boolean
  return str.toLowerCase().split('').reverse().join('') === str;
};
