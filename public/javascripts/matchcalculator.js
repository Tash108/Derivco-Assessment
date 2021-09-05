module.exports = {
    calculatePlayerMatch: function(sentence) {
        var charCount = characterCount(sentence);
        var score = reduceDigits(charCount);
        return score;
    }
};
//function to count the number of occurences of each alphabet
var characterCount = function(sentence) {
sentence=sentence.toLowerCase();
var noOfCountsOfEachCharacter = {};
var getCharacter, counter, actualLength, noOfCount;
for (counter = 0, actualLength = sentence.length; counter <
actualLength; ++counter) {
   getCharacter = sentence.charAt(counter);
   noOfCount = noOfCountsOfEachCharacter[getCharacter];
   noOfCountsOfEachCharacter[getCharacter] = noOfCount ? noOfCount + 1: 1;
}
var s="";
for (getCharacter in noOfCountsOfEachCharacter) {
   if(getCharacter!=' ')
    s+= noOfCountsOfEachCharacter[getCharacter];
}
    return s;

}

var reduceDigits = function sum(digits) {
    var numString = digits.toString();
  var newString = "";
  var integerM=0;
  while (numString.length > 1) { 
    newString += (parseInt(numString[0]) + parseInt(numString[numString.length - 1])).toString(); 
    numString = numString.substring(1, numString.length - 1); 
  }
  newString += numString; 

  if (newString.length > 2) { 
    return sum(newString);
  } else {
        integerM=(parseInt(newString, 10) || 0);
        if(integerM>=80){
              return newString+"%,good match";
        } else{
             return newString+"%";
          }
  }
}
