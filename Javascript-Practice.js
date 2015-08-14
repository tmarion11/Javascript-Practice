//Math in javascript
//Standard order of operation (PEMDAS)
(5 + 7) * 3 = 36
(3 * 4 )+ 3 - 12 / 2 = 9

//Comparators
6 > 4 = true // greater than
9 < 5 = false // less than
3 == 4 = false // equals
12 != 4 = true // not eqaul to
10 <= 10 = true // less than or eqaul

//strings
"Wookie runs fast" "Likes to swim"
"Wookie runs fast" + " And " + "Likes to swim" // Concatenation

//Concatenation works with numbers and their expessions
"Harlan will be " + 4 // Must provide the space at the end of the strings
"Platform " + 9 + " and 3/4" // Fractions must be put in a string or would return as 0.75

//Special characters and backslash notation in strings
"Flight #:\t921\t\tSeat:\t21C" // (\t) advances to the next tab stop
"Login Password:\t\t\"C3POR2D2\"" // Adds a quotation mark without ending the string too early
"Origin\\Destination:\tOrlando(MCO)\\London(LHR)" // Double backslash needed to use a backslash
"Departure:\t09:55A\nArrival:\t14:55P" // (\n) Shifts the printout to a new line

//String comparisons
"The Empire Strikes Back" == "The Empire Strikes Back" = true
"The Empire Strikes Back" == "Return Of The Jedi" = false
"The Empire Strikes Back" == "the empire strikes back" = false // Case counts

//Length of strings
"blahblahblah".length //Returns 12
"blah blah blah".length //Returns 14, spaces count

//Variables
//Rules
//No spaces, no digits, underscore are irritating, don't use dollar signs in a variable name.
var lukeSkywalker // Camelcase

//Changing a Variables content
var empireStrikesBack = 2
empireStrikesBack = 5 // Just change
empireStrikesBack = empireStrikesBack + 3 // Can also change this way
empireStrikesBack += 3 // same operation as above, diff syntax

//Variables names can also act as substitutes for the data they hold
"My favorite episode of Star Wars was " + empireStrikesBack + "." // Will return a 5

//Incrementing and Decrementing
empireStrikesBack++ // Would return 6
empireStrikesBack-- // Would return 4
