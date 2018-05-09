
HEY THERE MY NAME IS JACK SPARROW AND I LIVE IN A LAND FAR,  FAR AWAY. 
1234556
\\\\\\\\\\\\

// Literal expressions */

// Write: Sam and it fill find Sam word
//  /JACK/ = returns such word in String

/* meta characters: */

// . \d \w \s vs \D \W \S
// . = every file type png, jpg, bmp
// * = 0 - 9
// + = 1 and more
// ? = 0 or 1 (optional)
// .* = all files in folder
// \w = word A-Z, a-z, 0-9
// \W = anything that's not from the above like symbols /\|* etc.
// \s = space
// \S = anything that's not a space
// \d = digit
// \D = anything that's not a digit
// \w\w = two letters in words
// \s\s = two spaces in between words
// \d\d = two digits in one number
// \d\d\d = \d{3} = \d{1,4} => digit, digit, digit, = digit{n} = digit{min,max}
// \b = set boundry => \boundry\word{n}\boundry = returns word with n charactrs

One color, two colors, three colours. // colou?rs?

This is something  // ^\w+
Getting the first word
Out of every line 
Using Positions 
Get 4 letter words using boundaries   // \b\w{4}\b

jack@sparrow.com // \.\w+ => matche all dots and all characters after . 
sam@fisher.org // So three of these , .com, .org, .tk will match
james@bond.tk // \@ will match all @
// \..* => will match everything ".*", even comments, even those in the next line

/* Character classes => either value */

link is such a lynk dont you think? l nk l(nk 
// We have 4 "link like" words. Only difference is that what is in between L and NK. 
// inside [] we write what we want to match. 
// l[ yi(]nk => this will match empty space " ", "i" "y" & "(" between L and NK and that matches all 4

// character? => optional character 
 // we add ? if there are two lines, different only by one character and instead of saying
 // it must have a or must have b, we just type has a and optional b and viseversa

 // \some character = that character except for "w, d, s, b and a few other"

My name is Sam Fisher, my phone number is (201)124-9870. Call me!
My name is Agent 47, my phone number is 123.000-7971. Im not home. 
My name is Solid Snake, my phone number is 987-922.6864. I have no phone. 

// RegEx that matches all three phone numbers:
// \(?\d{3}[).-]\d{3}[.-]\d{4}

// "(" is optional for first number alone, thus we add "?"
// We have to specify character classes in order of lines (57, 58, 59) in between digits "(.-" => lines 57, 58, 59

/* so what \(?\d{3}[).-]\d{3}[.-]\d{4} means is
optional ( at the start
three digits followed by either ( or . or -
followed by 3 more digits followed by - . 
and then four more digits */

// ^ = starts with
// $ = ends with

// [a-z] = matches lowercase letters a to z
// [a-c] = matces letters a to c
// [A-Z] = matches uppercase characters A to Z
// [A-Za-z] = uppercase and lowercase
// [^A-Za-z] = matches all but A-Za-z letters
// [0-5] = matches all numbers from 0 to 5
// [1-3]{4} = matches four numbers from 1 to 3  
