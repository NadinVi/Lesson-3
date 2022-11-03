//Створити скрипт який має визначити середнє арифметичне трьох чисел з насутпними умовами:
//отримати від користувача через три prompt три числа
//показати через alert середнє арифметичне цих чисел

value1 = +prompt('input value1');
value2 = +prompt('input value2');
value3 = +prompt('input value3');
//average = (value1 + value2 + value3) / 3;
average = Math.round((value1 + value2 + value3) / 3);

alert(`Arithmetic mean of three numbers: ${average}`)
