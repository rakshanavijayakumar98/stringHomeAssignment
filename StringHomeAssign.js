let s = "Hello World"  //calculating the length of the last index 
let str1 = s.split(" ")
let lastWord1 = str1[str1.length - 1]
//console.log(lastWord1)  //print the last word in the string
console.log(lastWord1.length)


let s1 =  " fly me to the moon "  
let str = s1.trim().split(/\s+/)  //trim will remove the first and last space and split will split the string in arra
//console.log (str)   //split the string into an array of words
let lastWord= str[str.length -1] //print the last word in the array
console.log(lastWord.length)

let input1 = "listen" //check if two strings are anagrams.
let input2 = "silent"
let string1 = input1.split("")
let string2 = input2.split("") 
if(string1.sort().join() === string2.sort().join()) { //join will convert the array to string
    console.log("Given strings are anagrams")
 }
 else {    
    console.log("Given strings are not anagrams")
 }