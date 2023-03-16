// let regex = /string/flags;

// let tag = prompt('Enter tag:', 'h2');
// let regex = new RegExp(`<${tag}>`);  
// console.log(regex)

// i non case sensitive
// g whole text
// m multiline 
// s /n
// u unicode
// y search 
// w latin code, _

// let string = 'String, and more string';

// console.log(string.match(/String/gi))
// console.log(string.replace(/String/gi, "New String"));
// console.log(string.replace(/String/gi, "$& 1"));
// console.log(/string/gi.test(string));

// let str = document.querySelector('a').textContent;
// let regexp = /\d/g;
// let number = str.match(regexp).join('');
// let number = str.replace(/\D/g, "");
// console.log(number)


// console.log('😂'.length);
// console.log('A δ'.match(/\p{L}/gu));
// n - number
// p - symbols
// s - symbol (valyuta, math)
// z - seperator, line, space, paragraph
// let regexp = /x\p{Hex_Digit}\p{Hex_Digit}/u;
// console.log("number: xEA".match(regexp));
// let regex = /\p{Sc}\d/gu;
// console.log('Price: 1$, $2, $3'.match(regex));

// console.log(/^Hello/.test('Hello World'));
// console.log(/Hello$/.test('Hello World'));

// let regexp = /^\d\d:\d\d$/;
// while (true) {
//     let str = prompt("Enter time");
//     if (regexp.test(str)) {
//         console(str);
//         break;
//     }
// }


// let str = `1. First Line
// 2. Second Line
// 3. Third Line\n 4. Fourth Line`
// console.log(str.match(/^\d/gm))

// console.log('Hello World'.match(/\bWorld\b/));
// console.log('Hello MyWorld'.match(/\bWorld\b/));
// console.log('Hello 5 55 77 555 333 World'.match(/\b\d\d\b/g));

// console.log("6.2".match(/\d\.\d/))

// console.log('16 26 36 46 56 66 76 86 96'.match(/[15]6/g))
// console.log('#F5e'.match(/#[0-9][\da-f][0-9A-f]/i))

// Expect
// [^ayb]
// [^0-9] or \D

// console.log('axmed.dev.13@gmail.com'.match(/[^\d\sA-Z]/gi));


// console.log('#effd05 #fff #ff0000'.match(/#[\da-f][\da-f][\da-f]/gi))
// console.log('#effd05 #fff #ff0000'.match(/#[\da-f]{3,}/gi))
// console.log('#effd05 #fff #ff0000'.match(/#[\da-f]{1,}/gi))
// console.log('#effd05 #fff #ff0000'.match(/#[\da-f]+/gi))


// console.log('+994-55-953-62-40'.match(/\d+/g).join(''));
// ? - {0,1}
// * - all {0,}

// console.log('0 5 17.254 953,62'.match(/\d+[.,]+\d/g));

// console.log('<body> </h1> <h1>'.match(/<\/?[a-z][a-z0-9]*>/gi))

// console.log('hello. hello.. hello...'.match(/\.{3,}/g));

// console.log('sjdkajdl "jdoajdasd" dasdha "sdjkajdlkasjdlkad" askdaskdpa'.match(/".+"/g));
// console.log('sjdkajdl "jdoajdasd" dasdha "sdjkajdlkasjdlkad" askdaskdpa'.match(/"[^"]+"/g));
// console.log('sjdkajdl "jdoajdasd" dasdha "sdjkajdlkasjdlkad" askdaskdpa'.match(/".+?"/g));


// console.log("go gogo goooo".match(/go+/g));
// console.log("go gogo goooo".match(/(go)+/g));

// console.log("mail.com.ru g-mail.com.ru".match(/([\w-]+\.)+\w+/g));
// console.log("mail@com.ru g-mail@com.ru".match(/[-.\w]+@([\w-]+\.)+[\w-]+/g));

// console.log('<h1>Hello World</h1>'.match(/<(.*?)>/));

// console.log('<h1 class="title">Hello World</h1>'.match(/<(([a-z]+)\s*([^>]*))>/g));

// console.log('a'.match(/a(z)?(c)?/));
// console.log('azc'.match(/a(?<first>z)?(?<seocnd>c)?/));

// console.log(`He said: "She's the one"`.match(/['"](.?)['"]/g));
// console.log(`He said: "She's the one"`.match(/['"](.*?)\1/g));
// console.log(`He said: "She's the one"`.match(/(?<first>['"])(.*?)\k<first>/g));

// let regex = /html|css|java(script)?/gi
// let str = "learn programming Java, before HTML, after javascirpt";
// console.log(str.match(regex));

// let timeReExp = /([01]\d|2[0-3]):[0-5]/g;
// console.log("00:00 10:20 23:99 1:3".match(timeReExp));

// X(?=Y)
// console.log("Price 15$".match(/\d+(?=\$)/));

// X(?|Y)
// console.log("Price 5$ or 4£".match(/\d+(?!\$)/));

// (?<=Y)X
// console.log("Price $5".match(/(?<=\$)\d+/))

// (?<=Y)X
// console.log("Price $5 or £4".match(/(?<!\$)\d+/));

// console.log("Price 5$".match(/\d+(?=(\$|kr))/));


// let str = 'let varName = "value"';
// let regex = /\w+\y/;

// regex.lastIndex = 3;
// console.log(regex.exec(str));

// regex.lastIndex = 4;
// console.log(regex.exec(str));


