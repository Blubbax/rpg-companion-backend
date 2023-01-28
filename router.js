const { getSingleCharacter, getCharacters, createCharacter, updateCharacter, deleteCharacter } = require("./controller/character");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("RPG Companion Backend");
});

router.get("/characters/:id", getSingleCharacter);
router.get("/characters", getCharacters);
router.post("/characters", createCharacter);
router.put("/characters/:id", updateCharacter);
router.delete("/characters/:id", deleteCharacter);


module.exports = router;
