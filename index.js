// Задача 1
const Arr1 = [1, 5, '4', 'hello'];
const Arr2 = [true, 2, {}, 'a', 222];
console.log(Arr1[2]);
console.log(Arr2[2]);
console.log(Arr1[2]+Arr2[2]);

// Задача 2
Arr1.push(22);
console.log(Arr1[0]);
console.log(Arr1[1]);
console.log(Arr1[2]);
console.log(Arr1[3]);
console.log(Arr1[4]);

// Задача 3
for (const Arr of Arr2) {
    console.log(typeof Arr);
  }

// Задача 4
  const message = 'Welcome to Ukraine!';
  const messages = ['Welcome','to','Ukraine'];
  console.log(message.split(''));
  console.log(message.indexOf('l'));
  console.log(messages.join(''));

// Задача 5
  const styles = ['Джаз', 'Блюз'];
  styles.push('Рок-н-ролл');
  styles.splice(1, 1,'Класика');
  const deletedStyles = styles.splice(0,1);
  console.log(deletedStyles);
  styles.unshift('Реп');
  styles.unshift('Реггі');
  console.log(styles);

// Задача 6
  let country = prompt ('Введіть країну для доставки');
  switch (country) {
    case 'Китай':
        alert('Доставка в Китай буде коштувати 100 кредитів');
        break;
    case 'Чилі':
        alert('Доставка в Чилі буде коштувати 250 кредитів');
    case 'Австралія':
        alert('Доставка в Австралія буде коштувати 170 кредитів');
    case 'Індія':
        alert('Доставка в Індія буде коштувати 80 кредитів');
    case 'Ямайка':
        alert('Доставка в Ямайка буде коштувати 120 кредитів');
    default:
        alert('У вашій країні доставка недоступна');
}