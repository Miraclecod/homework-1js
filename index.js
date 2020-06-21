//Task-1
let str1 = "привет, ";
let str2 = "мир";

let str3 = str1 + str2;
console.log(str3);

//Task-2

let str4 = "1500";

console.log(+str4);

//Task-3

let str5 = "Маша";
let str6 = "любит";
let str7 = "есть на завтрак";
let str8 = -15;
let str9 = "кексиков";

console.log(str5 + " " + str6 + " " + str7 + " " + str8 + " " + str9);

//Task-4

let str10 = "На улице";
let str11 = "00020";
let str12 = "градусов";

console.log(str10 + " " + parseInt(str11) + " " + str12);

//Task-5

let arr = ["мороженное", "фруктовое", "любит", "Маша"];

let result1 = arr.reduceRight( (sum, current) => {
    return sum + " " + current
})

console.log(result1);

//Task-6
//Вариант через цикл
let str13 = "Проектирование=электронно_вычислительных=средств=достигло=невероятных=высот";
let result2 = "";
for(let i = 0; i < str13.length; i++){
    let resultSign = str13[i];
    if(resultSign == '='){
        result2 += ' ';
    } else if(resultSign == '_'){
        result2 += '-';
    }else{
        result2 += resultSign;
    }
}

console.log(result2);

//Вариант без цикла
result3 = str13.replace(/[=]/g, ' ');
result3 = result3.replace(/[_]/g, '-');
console.log(result3);

//Task-7

let str14 = "Ехала карета тёмным лесом. За каким-то, там, за интересом. Инте-инте-интерес. Выходи на букву 'эс'."

let arrRepeat = [0, 0, 0, 0];

arrRepeat[0] = str14.match(/\s/g).length;
arrRepeat[1] = str14.match(/,/g).length;
arrRepeat[2] = str14.match(/-/g).length;
arrRepeat[3] = str14.match(/\./g).length;

console.log(arrRepeat);