
/**
 * An array that has motivational quotes.
 * 
 *  @type {string[]}
 *  @name luckyQuotes
 */

let luckyQuotes = ["You are stronger than you think.", "Believe you can and you're halfway there.","Make today amazing.","Your only limit is you.", "Every day is a new beginning."];

/**
 * An array that has funny quotes.
 * 
 * @type {string[]}
 * @name funnyQuotes
 */

let funnyQuotes = ["I'm not lazy, I'm in energy-saving mode.","I'm not arguing, I'm just explaining why I'm right.","I'm not a complete idiot, some parts are missing.","I'm not shy, I'm just holding back my awesomeness.","I'm not Wonder Woman; I'm just wonderful."];


/**
 * An array that has sad quotes
 * 
 * @type {string[]}
 * @name sadQuotes;
 */

let sadQuotes = ["Tears speak more than words.","Silent pain, loud heart.","Love fades, heartbreak stays.","Heartache in a smile.","Smiling, hiding the ache."];

/**
 * 
 * @type {number}
 * @name randomNum
 */

let randomNum = Math.floor(Math.random() * 3);

/**
 * 
 * @returns the selection of the quote that will be randomly displayed based on the randomNum value
 */


let quoteSelection = num => {
switch (num) {
    case 0:
        return "lucky";

    case 1:
        return "funny";
    
    case 2:
        return "sad"
    
    default:
        return "No selection" 
    
}
}

/**
 * Accesing the value of quoteType to have a random quote deppending of the value 
 * if quoteType === 'lucky' then display the quote of the respective array with the type of feeling you are getting.
 * else if quoteType === 'funny' then display the quote of the respective array with the type of feeling you are getting.
 * else if quoteType === 'sad' then display the quote of the respective array with the type of feeling you are getting. 
 * 
 *  @param {string}
 *  @name  displayQuote
 */

const displayQuote = () =>{
    let quoteType = quoteSelection(randomNum);
    let selectedArray = [];

    if(quoteType === 'funny'){
        selectedArray = selectedArray.concat(funnyQuotes);
    } else if(quoteType === 'lucky'){
        selectedArray = selectedArray.concat(luckyQuotes);
    } else if(quoteType === 'sad'){
        selectedArray = selectedArray.concat(sadQuotes);
    }

    let randomIndex = Math.floor(Math.random() * selectedArray.length);
    let quote = selectedArray[randomIndex];

    console.log(`You are feeling ${quoteType} today\nso here is the best quote for the day:\n"${quote}"`);
}

displayQuote();