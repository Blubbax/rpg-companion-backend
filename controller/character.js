const Character = require("../model/Character");

const getSingleCharacter = (req, res) => {
    Character.findById(req.params.id, (err, characters) => {
        if (err) {
            res.send(err);
        }
        res.json(characters);
    });
};

const getCharacters = (req, res) => {
    Character.find((err, characters) => {
        if (err) {
            res.send(err);
        }
        res.json(characters);
    });
};

const createCharacter = (req, res) => {
    var character = new Character(req.body);

    character.save((err, character) => {
        if (err) {
            res.send(err);
        }
        res.json(character);
    });
}

const updateCharacter = (req, res) => {
    Character.findOneAndUpdate(
        { _id: req.params.id },
        {
            $set: req.body
        },
        {
            new: true,
        },
        (err, Character) => {
            if (err) {
                res.send(err);
            } else {
                res.json(Character);
            }
        }
    );
}

const deleteCharacter = (req, res) => {
    Character.deleteOne({ _id: req.params.id })
        .then(() => res.json({ message: "Character deleted" }))
        .catch((err) => res.send(err));
}

module.exports = {
    getSingleCharacter,
    getCharacters,
    createCharacter,
    updateCharacter,
    deleteCharacter
}