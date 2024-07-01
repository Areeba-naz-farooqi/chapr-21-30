// write a program that takes two user inputs for first and last name using prompt and
// and marge them in a new variable titled fullname. Greet the user using his 
// fullname. 

// var userFirstName = prompt("hey 👋, Enter your first name:")
// var userlastName = prompt("hey 👋, Enter your last name:")
// var firstNameTittled = userFirstName[0].toUpperCase() +userFirstName.slice(1).toLowerCase();
// var lastNameTittled = userlastName[0].toUpperCase ()+userlastName.slice(1).toLowerCase();
// alert(firstNameTittled+" "+lastNameTittled);

// 2.write a program to take a user input about his favourite mobile model.
// find the display the length of user input in your browser

// var userfavmobile = prompt("Enter your fav mobile phone :");
// var strlength = userfavmobile.length;
// document.write("My favourite mobile phone is "+userfavmobile+" stringlength is "+strlength)

// 3.write a program to find the index of letter "n" in the word "pakistani"
// and display the result in your browser.

// document.write("<br><br>")
// var Name = "pakistan";
// var index = Name.indexOf("n")
// document.write("Index of 'n' 7 in the string "+Name+" is " );

// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.

// var word = "Hello world";
// var findindex = word.lastIndexOf("l");
// document.write("string: " +word+ "<br>")
// document.write("last index of 'l':" +findindex);

// 5.Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.

// var word = "pakistani";
// var findingChar = word.charAt(3)
// document.write("string: " + word +"<br>" +`${"character at index 3 :" + findingChar}`);

// 6.Repeat Q1 using string concat() method.

// var userFirstName = prompt("hey 👋, Enter your first name:")
// var userlastName = prompt("hey 👋, Enter your last name:")
// var firstNameTittled = userFirstName[0].toUpperCase() +userFirstName.slice(1).toLowerCase();
// var lastNameTittled = userlastName[0].toUpperCase ()+userlastName.slice(1).toLowerCase();
// var concatenat = firstNameTittled.concat(lastNameTittled)
// document.write(concatenat)

// 7.Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.

// var city = "hyderabad";
// var replace = "islamabad"
// for(var i =0 ;i<city.length;i++){
//  if(city.slice(i,i+4)=="hyderabad"){
//  }
// }
//  document.write("city: hyderabad" +"<br>" + "After repalcement :"  +replace);

//  8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message =
//   "“Ali and Sami are best friends.They play cricket and football together.";

// for (var i = 0; i < message.length; i++) {
//   if (message.slice(i, i + 3) == "and") {
//     var replacedWord = message.replace("and", "&");
//   }
// }
// document.write(
//   "original message : " + message + "<br>" + "Replaced message :" + replacedWord
// );

// document.write("<br><br><br>");

// 9.Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.
// var str = "472";
// var strIntoNum = Number(str);
// document.write(
//   "value: " +
//     str +
//     "<br>" +
//     "type: " +
//     typeof str +
//     "<br>" +
//     "value: " +
//     strIntoNum +
//     "<br>" +
//     "type:" +
//     typeof strIntoNum
// );
// document.write("<br><br>");

// 10. Write a program that takes user input. Convert and
// show the input in capital letters.
// var input = prompt("write any thing and i will convert it in to UPPER CASE ");
// var convert = input.toUpperCase();
// document.write("user input: " + input + "<br>" + "upper case: " + convert);

// 11.Write a program that takes user input. Convert and
// show the input in title case.

// var userInput = prompt("write what you want :");
// var splittedInput = userInput.split(" ");
// var finish = [];
// for (var i = 0; i < splittedInput.length; i++) {
//   finish.push(splittedInput[i][0].toUpperCase() + splittedInput[i].slice(1).toLowerCase());
    
// }
// var result = finish.join(" ")
// document.write("user input "+userInput+"<br>"+"Title case : " +result)

// 12.Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

// var num = 35.36 ;
// var intoNum = num.toString();
// for(var i = 0 ; i < intoNum.length; i++){
//     if(intoNum.slice(i,i+1)=="."){
//         var result=intoNum.replace(".","")
//     }
// }
// document.write("Number:"+intoNum+"<br>"+"Result: "+result)

// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .

// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64

// var username = +prompt("please enter a valid password" );
// for(var i = 0; i < username.length; i++){
//     if(username[i] ==33||44||46||64){
//         alert("enter valid password")
//         break;
//     }
// }

// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:

// var userInput = prompt(
//   "Welcome to ABC bakery .What do you want to order sir / ma,am?"
// );
// A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var flag = false;
// for (var i = 0; i < A.length; i++) {
//   if (A[i].toLowerCase() === userInput.toLowerCase()) {
//     var userFruit = i;
//     flag = true;
//     alert(userInput + " is available at index " + userFruit + " in our bakery");
//     break;
//   }
// }
// if (!flag) {
//   alert("sorry" + userInput + " not found:");
// }

// document.write("<hr>");

// 15. Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.

// var userPasswar = prompt("enter your passward:");

// if (userPasswar.length < 6) {
//   alert("Passward should be atleast 6 characters");
// }
// if (userPasswar.charCodeAt(0) >= 48 && userPasswar.charCodeAt(0) <= 57) {
//   alert("passward should not start with a number");
// }
// for (var i = 0; i < userPasswar.length; i++) {
//   var charCode = userPasswar.charCodeAt(i);
//   if (
//     (charCode >= 65 && charCode <= 90) ||
//     (charCode >= 97 && charCode <= 122)
//   ) {
//     var hasLetter = true;
//   } else if (charCode >= 48 && charCode <= 57) {
//     var hasNumber = true;
//   }
//   if (hasLetter && hasNumber) {
//     break;
//   }
// }
// if (!hasLetter || !hasNumber) {
//   alert("Password must contain both alphabets and numbers");
// } else {
//   alert("Password is valid");
// }

// 16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

// var university = "university of karachi";
// var array = university.split("");
// for(var i = 0; i < array.length; i++){
//     document.write(array[i] + "<br>");
// }

// 17. Write a program to display the last character of a user
// input.

// var userInput= prompt("Enter your text:");
// var lastChar = userInput.slice(-1);
// document.write("user input: "+ userInput+"<br>"+ "last character of input :"+lastChar)

// 18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.

// var str = "The quick brown fox jumps over the  lazy dog";
// var strCaseInsensitive = str.toLowerCase();
// var count = [];
// for (var i = 0; i < strCaseInsensitive.length; i++) {
//   if (strCaseInsensitive.slice(i, i + 3) == "the") {
//     count.push(strCaseInsensitive.slice(i, i + 3));
//   }
// }
// console.log(count.length);
// document.write("Text: " +
//     str +
//     "<br>" +
//     "There are " +
//     count.length +
//     "accurance(s) of word 'the'"
// );

// 21-25 chap compeletd.

// 26-30 start

// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number
  
// var postInt = prompt("Enter a positive integer");
// var roundOf =  Math.round(postInt);
// var floorValue = Math.floor(postInt);
// var ceilValue = Math.ceilvalue(postInt);
// document.write("number :" +postInt +"<br>"+"round off value of the number" + roundOf +"<br>"+"floor value of the number"+floorValue+"<br>"+"ciel value of the number"+ceilValue);

// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var posInt = prompt(" Enter a negative integer ");
 
// var roundOf = Math.round(posInt);
// var floorrValue = Math.floor(posInt);
// var cielValue = Math.ceil(posInt);
// document.write(
//   "number : " +
//     posInt +
//     "<br>" +
//     " round off value of the number" +
//     roundOf +
//     "<br>" +
//     "floor value of the number" +
//     floorrValue +
//     "<br>" +
//     "ceil value of the number" +
//     cielValue
// );

// 6. Write a program that shows a random number between 1
// and 100 in your browser.

// var input = prompt("enter any num")
// var random = Math.random()*100
// var round = Math.round(random)
// document.write(round)

// document.write ("<br>");

// 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

// var userinput = prompt("Enter your weight");
// var possiblevaue = ["50","50kgs","50.2kgs","50,2kilograms"];
// document.write("<br>");