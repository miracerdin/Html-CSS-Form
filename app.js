// function mailValidation() {
//   const mail = document.getElementById("email").value;
//   const pattern1 = /[.][a-zA-Z0-9][a-zA-Z0-9][a-zA-Z0-9]$/;
//   const pattern2 = /[.][a-zA-Z0-9][a-zA-Z0-9]$/;
//   if (
//     (pattern1.test(mail) || pattern2.test(mail)) &&
//     mail.indexOf("@", 1) != -1 &&
//     mail.indexOf("@") == mail.lastIndexOf("@") &&
//     mail.indexOf(".") > mail.indexOf("@") + 1 &&
//     !mail.includes(" ")
//   ) {
//     alert("Your e-mail address is valid!");
//   } else {
//     alert("Your e-mail address is not valid!");
//   }
// }
//* kick the first element and sum rest of the numbers.
// let ls = [0, 1, 3, 6, 10];
// let result = [];
// let a;
// let total = 0;
// function recurse(a) {
//   for (let i = 0; i < ls.length; i++) {
//     total += ls[i];
//     //   ls.shift();
//   }
//   result.push(total);
//   let ls = ls.shift();

//   if (ls.length == 0) {
//     return result;
//   } else {
//     recurse(ls);
//   }
// }

// console.log(result);
// console.log(ls);

// function partsSums(ls) {
//   let newList = [];
//   let total = ls.reduce((a, b) => a + b, 0);
//   if (ls.length <= 0) {
//     newList.push(total);
//     return newList;
//   }
//   newList.push(total);
//   ls.shift();
//   return newList.concat(partsSums(ls));
// }

// let plus1 = document.getElementsByClassName("plus")[0];
// let plus2 = document.getElementsByClassName("plus")[1];
// let minus1 = document.getElementsByClassName("minus")[0];
// let minus2 = document.getElementsByClassName("minus")[1];

let toplam1 = Number(document.getElementsByClassName("ürün1")[0].innerHTML);
console.log(toplam1);
// let toplam2 = document.getElementsByClassName("ürün2")[0].innerHTML;

// minus1.addEventListener("click", cıkarma);
// function cıkarma() {
//   toplam1--;
// }

function minus() {
  toplam1 -= 1;
  toplam1.toString();
}
