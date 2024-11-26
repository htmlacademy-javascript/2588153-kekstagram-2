function checkLength(string, maxLength) {
  return (string.length <= maxLength);
}

checkLength('проверяемая строка', 18);

function checkPalindrom(string) {
  string = string.replaceAll(' ', '');
  string = string.toLowerCase();
  let newString = '';
  for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i];
  }
  return (newString === string) ? 'Это палиндром' : 'Это не палиндром';

}

checkPalindrom('Лёша на полке клопа нашёл ');

