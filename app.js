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
//   ls.shift();
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

// let toplam1 = Number(document.getElementsByClassName("ürün1")[0].innerHTML);
// console.log(toplam1);
// let toplam2 = document.getElementsByClassName("ürün2")[0].innerHTML;

// minus1.addEventListener("click", cıkarma);
// function cıkarma() {
//   toplam1--;
// }
// const cost = document.getElementsByClassName("cost")[0].innerHTML.slice(1);
// function arttir() {
//   var sonuc = document.getElementById("sonuc").innerText;
//   sonuc = Number(sonuc) + 1;
//   document.getElementById("sonuc").innerText = sonuc;
//   console.log(document.getElementsByClassName("cost")[0].innerHTML);
//   cost2 = 54.99 * sonuc;
//   console.log(cost2);
//   document.getElementsByClassName("cost")[0].innerHTML = "$" + cost2.toString();
//   console.log(sonuc);
// }

// function azalt() {
//   var sonuc = document.getElementById("sonuc").innerText;
//   sonuc = Number(sonuc) - 1;
//   document.getElementById("sonuc").innerText = sonuc;
//   cost2 = 54.99 * sonuc;
//   document.getElementsByClassName("cost")[0].innerHTML = "$" + cost2.toString();
//   if (document.getElementById("sonuc").innerText <= 0) {
//     return (
//       (document.getElementById("sonuc").innerText = 0),
//       (document.getElementsByClassName("cost")[0].innerHTML = "$54.99")
//     );
//   }
// }

// const cost1 = document.getElementsByClassName("cost")[1].innerHTML.slice(1);
// function arttir() {
//   var sonuc = document.getElementById("sonuc2").innerText;
//   sonuc = Number(sonuc) + 1;
//   document.getElementById("sonuc2").innerText = sonuc;
//   console.log(document.getElementsByClassName("cost")[1].innerHTML);
//   cost2 = 54.99 * sonuc;
//   console.log(cost2);
//   document.getElementsByClassName("cost")[1].innerHTML = "$" + cost2.toString();
//   console.log(sonuc);
// }

// function azalt() {
//   var sonuc = document.getElementById("sonuc2").innerText;
//   sonuc = Number(sonuc) - 1;
//   document.getElementById("sonuc2").innerText = sonuc;
//   cost2 = 54.99 * sonuc;
//   document.getElementsByClassName("cost")[1].innerHTML = "$" + cost2.toString();
//   if (document.getElementById("sonuc2").innerText <= 0) {
//     return (
//       (document.getElementById("sonuc2").innerText = 0),
//       (document.getElementsByClassName("cost")[1].innerHTML = "$54.99")
//     );
//   }
// }

// let incrementButton = document.getElementsByClassName("inc");
// let decrementButton = document.getElementsByClassName("dec");

// console.log(decrementButton);
// for (let i = 0; i < incrementButton.length; i++) {
//   let button = incrementButton[i];
//   button.addEventListener("click", function (event) {
//     let buttonClicked = event.target;
//     console.log(buttonClicked);
//     let incrementNumber = buttonClicked.parentElement.children[1].innerHTML;
//     console.log(incrementNumber);
// console.log(typeof incrementNumber);
//     let newincrementNumber = parseInt(incrementNumber) + 1;
// incrementNumber = newincrementNumber;
//     buttonClicked.parentElement.children[1].innerText = newincrementNumber;
//     console.log(newincrementNumber);

//     //** Cost seciton */
//     let input = buttonClicked.parentElement.parentElement.children[1];
//     let inputInnertext = input.innerText.slice(1);
//     let newValue = parseFloat(inputInnertext).toFixed(2);
//     let lastValue = inputInnertext * newincrementNumber;
//     buttonClicked.parentElement.parentElement.children[1].innerText =
//       "$" + lastValue;
//   });
// }
// Decrement

// for (let i = 0; i < decrementButton.length; i++) {
//   let button = decrementButton[i];
//   button.addEventListener("click", function (event) {
//     let buttonClicked = event.target;
//     console.log(buttonClicked);
//     let incrementNumber = buttonClicked.parentElement.children[1].innerHTML;
//     console.log(incrementNumber);
// console.log(typeof incrementNumber);
//     let newincrementNumber = parseInt(incrementNumber) - 1;
// incrementNumber = newincrementNumber;
//     buttonClicked.parentElement.children[1].innerText = newincrementNumber;
//     console.log(newincrementNumber);
// Cost seciton
//     let input = buttonClicked.parentElement.parentElement.children[1];
//     let inputInnertext = input.innerText.slice(1);
//     console.log(inputInnertext);
//     let newValue = parseFloat(inputInnertext).toFixed(2);
//     let lastValue = inputInnertext * newincrementNumber;
//     console.log(lastValue);
//     buttonClicked.parentElement.parentElement.children[1].innerText =
//       "$" + lastValue;
//     if (lastValue <= 0) {
//       return (buttonClicked.parentElement.parentElement.children[1].innerText =
//         "$" + 0);
//     }
//   });
// }
let product = document.querySelector(".img");
product.addEventListener("click", (event) => {
  if (event.target.className == "dec") {
    console.log("minus button clicked");
  } else if (event.target.classList.contains("inc")) {
    console.log("plus button clicked");
  } else if (event.target.classList.contains("reset")) {
    console.log("reset button clicked");
  } else {
    console.log("other button clicked");
  }
});
