const { words } = require("../data/words");

// find word by ID, returning the entire word object from the array of words
const handleWordsId = (req, res) => {
  const word = words.find((element) => element.id === req.params.id);
  word
    ? res.status(200).json({
        status: 200,
        data: word,
      })
    : res.status(400).json({
        status: 400,
        error: "The provided ID has not been found.",
      });
};

// find a random word and reuturn only the id and letter count
const handleWords = (req, res) => {
  // find a random word in the array using math.random as the index
  const randomWord = words[Math.floor(Math.random() * words.length)];
  // deconstruct randomWord, using id and lettercount, because we don't want the word
  const { id, letterCount } = randomWord;
  res.status(200).json({
    status: 200,
    // return the new object without the word itself
    data: { id, letterCount },
  });
};

const handleGuess = (req, res) => {
  // create an empty array to push the boolean values to
  const array = [];
  // find a wordObject using the provided url param id
  const wordObject = words.find((element) => element.id === req.params.id);
  // if the url param id is valid (a number) and is not found in the array of objects, carry on
  if (!isNaN(req.params.id) && wordObject) {
    // create a variable to isolate the word in wordObject using the it's key (word)
    const word = wordObject.word.toLowerCase();
    // if the url param letter is a single letter character, carry on
    if (/[a-zA-Z]/.test(req.params.letter) && req.params.letter.length === 1) {
      // split the word into an array of elements, each being a single letter
      // forEach letter, check to see if it is the same as the url letter
      word.split("").forEach((letter) => {
        // if the are the same, push true to the array
        if (letter === req.params.letter.toLowerCase()) {
          array.push(true);
          // if they are not the same, push false to the array
        } else {
          array.push(false);
        }
      });
      // return the array
      res.status(200).json({
        status: 200,
        guesses: array,
      });
      // if the url param letter is not a single letter character, display an error message
    } else {
      res.status(400).json({
        status: 400,
        error:
          "The guess must be a letter, and a single letter alone. No numbers or special characters are accepted.",
      });
    }
    // if the url param id is not valid (a number) or is not found in the array of objects, display an error message
  } else {
    res.status(400).json({
      status: 400,
      message: "The provided ID has not been found or is invalid.",
    });
  }
};

module.exports = {
  handleWords,
  handleWordsId,
  handleGuess,
};
