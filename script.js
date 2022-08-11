/* .js files add interaction to your website */
var quoteList = [
 "The rise of the middle class, the employment of domestic servants, and the decrease in family size (1760-1820) played an important role in the women’s rights movement. It freed up the critical time they needed to devote to fighting for rights, instead of doing onerous house work all day.", 
 "1 in 3 women around the world experience violence.", 
 "58% of all women murdered in 2017 were killed by an intimate partner or a family member,", 
 "Women make up just 25% of parliamentarians worldwide.",
  "Over 2.7 billion women don’t have the same work opportunities as men, with laws restricting the types of jobs they can do.",
  "Less than 15% of landholders worldwide are women, despite most women in the global south working in agriculture"
]; 
// variables to get quote, to get button, and an index count for array
var myBtn = document.getElementById("myBtn");
var quote = document.getElementById("quote");

var count = 0;


// listen for button press
myBtn.addEventListener("click", displayQuote); 
// function to change quote and reset count
function displayQuote() {
  quote.innerHTML = quoteList[count]; // 0 1 2 3
  count++; // count is increased

  if(count == quoteList.length) {
    count = 0; 
  }
}
