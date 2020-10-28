"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const {
  handleClients,
  handleClientsId,
  handleClientsAdd,
  handleClientsDelete,
} = require("./handlers/clientHandlers");
const {
  handleWords,
  handleWordsId,
  handleGuess,
} = require("./handlers/hangmanHandlers");

express()
  .use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })
  .use(morgan("tiny"))
  .use(express.static("public"))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))

  // endpoints

  .get("/customers", handleClients)

  .get("/customers/:id", handleClientsId)

  .post("/customers/add", handleClientsAdd)

  .delete("/customers/:id", handleClientsDelete)

  .get("/hangman/word/:id", handleWordsId)

  .get("/hangman/word", handleWords)

  .get("/hangman/guess/:id/:letter", handleGuess)

  .listen(8000, () => console.log(`Listening on port 8000`));
