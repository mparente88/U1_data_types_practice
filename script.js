/*
 * Prompt 1:
 *
 * Declare a variable called myFavoriteSong on one line and console.log the value
 * Then, using your Literals, console.log "my favorite song is..." with the song's value
 */
let myFavoriteSong = "New Born, by Muse"

//I hope I'm not the only one that likes Muse here. 
//I saw them in concert two years ago and it was phenomenal.
//Also, I set it as let because my favorite song shifts about twice an hour.

console.log(`My favorite song is... ` + myFavoriteSong)

/*
 * Prompt 2:
 *
 * Create 3 variables using let and const, then console.log each of them, using a string literal (` ${} `} in the log
 */

console.log(`My favorite song is... ${myFavoriteSong}`)

//I love these inline strings.

/*
 * Prompt 3:
 *
 * Create a variable and assign a number to it. On a separate line for each, using console.log:
 *   - add a number to your variable
 *   - subtract a number from your variable
 *   - multiply your variable by 3
 *   - divide your variable by 7
 *   - calculate the remainder of dividing your variable by 2
 */

let myNumber = 10

console.log(myNumber + 1)
console.log(myNumber - 1)
console.log(myNumber / 2)
console.log(myNumber * 2)
console.log(myNumber % 3)

//I really enjoy the "this is how this might be used in developing a video game" examples
//that you give, such as for why we might use the remainder.

/*
 * Prompt 4:
 *
 * Create a variable called firstName and assign it to a string of your first
 * name. Create a variable called lastName and assign it to a string of your
 * last name.
 *
 * Create a variable called fullName and use addition to combine your firstName
 * and lastName variables.
 * Run a console.log that says 'hello my name is..." with your fullName. 
 */

let firstName = "Molly"

let lastName = "Parente"

let fullName = `${firstName} ${lastName}`

console.log(`hello my name is... ${fullName}`)

/* Arrays */

// Create an array of Movies, then log the 2nd movie in your array
// Use your array methods to add a movie in to the Front of the array, then the Back of the Array, then to the 2nd index point of the array

let madMaxMovies = [
  'Mad Max',
  'Mad Max: The Road Warrior',
  'Mad Max: Beyond Thunderdome',
  'Mad Max: Fury Road',
  'Furiosa: A Mad Max Saga',
]

madMaxMovies.unshift(`Mad Max: The Prequel`)

madMaxMovies.push('Nux: A Mad Max Saga')

//I had to look up how to index something into the 2nd spot, but the MDN helped.

madMaxMovies.splice(1, 0, `Mad Max: The Prequel Sequel`)

console.log(madMaxMovies)

/*
 *
 * Retrieve "Marty McFly" from each of the arrays below.
 */

let array1 = ['Marty Marion', 'Marty Feldman', 'Marty McFly', 'Marty Marion'];
let array2 = [
  ['Marty Feldman', 'Marty Marion'],
  ['Marty Stuart', 'Marty McFly'],
  ['Marty Jannetty', 'Marty Robbins']
];
let array3 = [
  ['Marty Feldman', ['Marty Marion']],
  ['Marty Stuart', ['Marty Janetty', ['Marty McFly'], 'Marty Robbins']]
];

console.log(array1[2])

console.log(array2.indexOf(`Marty McFly`))


//I used the MDN to learn about indexOf and was getting -1 back, which means that it doesn't
//exist. I know it does exist, but I'm not getting how to log it independent of Marty Stuart.

console.log(array2[1][1])

//Okay, then I tried the thing that I did in the first place, but it worked this time.
//I must've had a typo. We're all good now!

console.log(array3[1][1][1])

//I nested the square brackets at first, but that didn't work. Trying it this way returns
//an array, not a string. Am I supposed to convert it into a string?

console.log(array3[1][1][1][0])

// Wait. Oh, duh. Just slap another one on there.

/*
 *
 * Use the length of the array below to retrieve the second to last item.
 */

let array4 = ['a', 'b', 'c', 'd', 'e'];

console.log(array4[3])

let lookingForLetter = array4.length - 2

console.log(array4[lookingForLetter])

//Ashley helped me through this one.

/*
 *
 * Use the following arrays to answer the subprompts below.
 */

let thom = ['Thom', 1000, 'Christchurch'];
let karolin = ['Karolin', 16, 'New York'];
let kristyn = ['Kristyn', 5, 'Pittsburgh'];
let cathleen = ['Cathleen', 186, 'New York'];

// Cathleen decides that Thom can't be named "Thom" anymore. Remove "Thom" from
// the thom array and replace it with "Tom".

// Karolin just had her birthday; change Karolin's array to reflect her being
// a year older.

// Change Cathleen's hometown from New York to "Gotham City".

// Remove "Pittsburgh" from Kristyn's array and add "Oakland".

thom.shift()

thom.unshift(`Tom`)

console.log(thom)

karolin.splice(1, 1, 17)

console.log(karolin)

cathleen.pop()
cathleen.push(`Gotham City`)

console.log(cathleen)

kristyn.pop()
kristyn.push(`Oakland`)

console.log(kristyn)


//Ashley challenged me to make a text-based if/then adventure game, so I'm going to
//putz around with that a little.

heroName = "Sir Jeremy" //Enter any name
heroPronoun = "he" //Enter "he" "she" or "they", so that the game's narration can appropriately refer to the hero
heroPronoun2 = "him" //Enter "him" "her" "them"
heroPossessive = "his" //enter "his" "hers" "theirs"
heroClass = "fighter" //Enter "fighter" "thief" or "wizard"

basicInventory = [
  `a backpack`,
  'a bedroll',
  'a torch',
]

if (heroClass === `fighter`) {
  basicInventory.unshift(`a steel longsword`)
  basicInventory.unshift(`a metal shield`)
  basicInventory.unshift(`a suit of chainmail`)
  basicInventory.push(`a whetstone`)
} else if (heroClass === `thief`) {
  basicInventory.unshift(`a sharp knife`)
  basicInventory.unshift(`a suit of leather armor`)
  basicInventory.push(`a bag of caltrops`)
} else {
  basicInventory.unshift(`a magic staff`)
  basicInventory.unshift(`a set of robes`)
  basicInventory.push(`a focus crystal`)
}

heroInventory = basicInventory

let myGold = Math.floor((Math.random() * 100))

console.log(`${heroName} brings ${heroInventory.join(', ')}, ${myGold} gold coins and ${heroPossessive} best intentions into the dungeon.`)

