function doubleChar(str) {
    let newStr = "";
    for (let i = 0; i < str.length; i++){
        newStr = newStr + str[i] + str[i];
    }
    return newStr;
}
  
console.log(doubleChar("abcd")); //Return "aabbccdd"
console.log(doubleChar("Adidas")); //Return "AAddiiddaass"
console.log(doubleChar("1337")); //Return "11333377"
console.log(doubleChar("illuminati")); //Return "iilllluummiinnaattii"
console.log(doubleChar("123456")); //Return "112233445566"
