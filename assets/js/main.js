//========== lvl 1.1 ==========

// let nachName = "Schiwe";
// let vorName = "Alex";
// let name = nachName + vorName;

// console.log(name.length);

//========== lvl 1.2 ==========

// let txt = "How inappropriate to call this planet Earth, when clearly it is Ocean.";

// console.log(txt.indexOf("h")); // 27
// console.log(txt.indexOf("Earth")) // 38
// console.log(txt.indexOf("Moon")) // -1 ,nicht vorhanden

//========== level 1.3 ==========

// let txt2 = "Blue, green, grey, white, or black; smooth, ruffled, or mountainous; that ocean is not silent.";

// console.log(txt2.search(";")); // 34
// console.log(txt2.search("green")); // 6
// console.log(txt2.search("blue")); // -1
// console.log(txt2.search("Blue")); // 0

//========== level 1.4 ==========

// let A = 'Sam is going to coding school';

// console.log(A.slice(0, 3));
// console.log(A.slice(4, 6));
// console.log(A.slice(1, 15,) + " " + A.slice(-6));
// console.log(A.slice(4, 15) + " " + A.slice(-6));
// console.log(A.slice(-6));
// console.log(A.slice(0, 6) + " " + (A.slice(-6)));

// let firstName = (A.slice(0, 3));
// let is = (A.slice(4, 6));
// let going = (A.slice(1, 15,) + " " + A.slice(-6));
// let goingTo = (A.slice(4, 15) + " " + A.slice(-6));
// let school = (A.slice(-6));
// let samIs = (A.slice(0, 6) + " " + (A.slice(-6)))

// console.log(samIs);

// document.write(firstName + "<br>" + is + "<br>" + going + "<br>" + goingTo + "<br>" + school + "<br>" + samIs);

//========== level 1.5 ==========

// let text = 'Sam is back from coding school';

// console.log(text.substring(0, 3));
// console.log(text.substring(4, 6));
// console.log(text.substring(24));
// console.log(text.substring(0, 6) + text.substring(23));

// let firstName = (text.substring(0, 3));
// let is = (text.substring(4, 6));
// let school = (text.substring(24));
// let samIs = (text.substring(0, 6) + text.substring(23));

// document.write(firstName + "<br>" + is + "<br>" + school + "<br>" + samIs);

//========== level 1.6 ==========

// let text = "Sam is working at coding school";

// console.log(text.substr(0, 3));
// console.log(text.substr(4, 2));
// console.log(text.substr(15, 3) + text.substr(25, 6));
// console.log(text.substr(0,3) + text.substr(6, 5) + text.substr(5, 1) + text.substr(14, 3) + text.substr(24, 7));

// let firstName = (text.substr(0, 3));
// let is = (text.substr(4, 2));
// let at = (text.substr(15, 3) + text.substr(25, 6));
// let works = (text.substr(0,3) + text.substr(6, 5) + text.substr(5, 1) + text.substr(14, 3) + text.substr(24, 7));

// let text2 = firstName + is + at + works;

// let headline = document.getElementById("headline");

// headline.innerHTML = firstName + "<br>" + is +"<br>" + at + "<br>" + works;

//========== Level 1.7 ===========

// let text = "Sam is good at coding school";

// console.log(text.replace("good", "bad"));

// let text1 = text.replace("good", "bad"); 

// text1 = text1.replace("coding ", "");

// console.log(text1);

// let text2 = text.replace("Sam", "Tom");

// text2 = text2.replace("coding ", "");

// console.log(text2);

// text3 = text.replace("school", "tennis");

// text3 = text3.replace("coding ", "");

// console.log(text3);

// ========== Falsche Methode ===============

// let text1 = "Sam is good at coding school";

// console.log(text1.replace("Sam", "Tom") && text.replace("coding ", ""));

// let text2 = "Sam is good at coding school";

// console.log(text2.replace("school", "tennis"));

// let text = "Sam is good at coding school";

// // console.log(text.replace("good", "bad") && text.replace("coding ", ""));
// console.log(text.replace("Sam", "Tom") && text.replace("coding ", ""));

// ========== Falsche Methode ===============

// Inner HTML =============================================================

// let headline = document.getElementById("headline");

// headline.innerHTML = text1 + "<br>" + text2 + "<br>" + text3;


//========== level 1.8 ==========

// let text = "Sam is going to school";

// let text1 =text.replace("coding", " ") && text.toUpperCase();

// console.log(text1);

// let text2 = text.replace("coding", " ") && text.toLowerCase()

// text2 = text2.replace("to", "at");

// console.log(text2);

// let text3 = text.replace("Sam", "SAM");

// text3 = text3.replace("school", "SCHOOL");

// console.log(text3);

// text4 = text.replace("is going to", "IS GOING TO");

// console.log(text4);

// text5 = text.replace("i", "I");

// text5 = text5.replace("g", "G");

// text5 = text5.replace("t", "T");

// text5 = text5.replace("school", "School");

// console.log(text5);

// let headline = document.getElementById("headline");

// headline.innerHTML = text1 + "<br>" + text2 + "<br>" + text3 + "<br>" + text4 + "<br>" + text5;

//========== level 1.9 ==========

let text1 = "Sam is going to coding school";
let text2 = "Tom";
let text3 = "programming bike";
let text4 = "and";

// Text1 ==============

let textTheater = " to the movie theater";

text1 = text1.replace(" coding", "") + " " + text4; 

console.log(text1.concat(textTheater));

// Text2 ==============

let textMovie = " to movie theater"

let movie = text1.slice(0, 12);

movie = movie.concat(textMovie);

console.log(movie);

// Text3 ==============

let school = " are going to school";
let together = text2 + " " + text4 + " " + text1.slice(0,3) + school;

console.log(together);

// Text4 ==============

let gym = " are going to gym";

let togetherGym = text2 + " " + text4 + " " + text1.slice(0,3);

togetherGym = togetherGym.concat(gym);

console.log(togetherGym)

// Text5 ==============

text3 = text3.replace("programming bike", " is going to school and to the movie theater");

console.log(text2.concat(text3));