//Переписати код нижче з використанням конструкції switch…case
//  let numOrStr = prompt('input number or string');
//  if(numOrStr === null) {
//  console.log('ви скасували')
//  } else if( numOrStr.trim() === '' ) {
// console.log('Empty String');
// } else if (isNaN(+numOrStr)) {
//  console.log('number is Ba_NaN')
//  } else {
//  console.log('OK!')
//  }


numOrStr = prompt('input number or string');
switch (isNaN(+numOrStr) || numOrStr && numOrStr.trim())
{
    case null:
        console.log('ви скасували')
        break;
    case '':
        console.log('Empty String')
        break;
    case  true:
        console.log(' number is Ba_NaN')
        break;
    default:
        console.log('OK!')
}


