ThreeWords
===========

ThreeWords is a JavaScript function that takes a numerical value and converts it into a unique three-word identifier. It is intended for use where communicating a numerical value would be cumbersome or difficult, particularly in URLs.

For example:
* http://www.example.com/3715986347 becomes http://www.example.com/SovietLaserBasket.  
* http://www.example.com/3751968347 becomes http://www.example.com/SplitVolumeGlass.

The wordlist (taken from Oren Tirosh's [Mnemonic Encoding Project](http://web.archive.org/web/20090918202746/http://tothink.com/mnemonic/wordlist.html)) has been carefully selected so that:
* All words are short (four to seven characters).
* No two words sound similar.
* All words have more than one syllable, making them more easily understood when spoken.
* No word is a prefix of another (e.g. VISIT/VISITOR, BOOK/BOOKSHOP).
* No words have tricky spellings or pronunciations.
* No offensive words.