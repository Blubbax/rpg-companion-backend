const mongoose = require("mongoose");




const FeaturesSchema = new mongoose.Schema({
    name: {
        type: String
    },
    description: {
        type: String
    }
});

const QuestStepSchema = new mongoose.Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    result: {
        type: String
    },
    done: {
        type: Boolean
    }
});

const QuestSchema = new mongoose.Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    steps: {
        type: [QuestStepSchema]
    },
    type: {
        type: String
    },
    finished: {
        type: Boolean
    }
});

const ItemSchema = new mongoose.Schema({
    name: {
        type: String
    },
    quantity: {
        type: Number
    },
    favorite: {
        type: Boolean
    }
});

const CategorySchema = new mongoose.Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    items: {
        type: [ItemSchema]
    },
});

const MoneySchema = new mongoose.Schema({
    gold: {
        type: Number
    },
    silver: {
        type: Number
    },
    copper: {
        type: Number
    }
});

const InventorySchema = new mongoose.Schema({
    categories: {
        type: [CategorySchema]
    },
    money: {
        type: MoneySchema
    }
});

const SessionStepSchema = new mongoose.Schema({
    name: {
        type: String
    },
    place: {
        type: String
    },
    description: {
        type: String
    }
});

const SessionSchema = new mongoose.Schema({
    date: {
        type: Date
    },
    steps: {
        type: [SessionStepSchema]
    },
    summary: {
        type: String
    }
});

const StoryCharacter = new mongoose.Schema({
    name: {
        type: String
    },
    description: {
        type: String
    }
});

const StoryCity = new mongoose.Schema({
    name: {
        type: String
    },
    description: {
        type: String
    }
});

const StorySchema = new mongoose.Schema({
    name: {
        type: String
    },
    sessions: {
        type: [SessionSchema]
    },
    players: {
        type: [StoryCharacter]
    },
    npcs: {
        type: [StoryCharacter]
    },
    cities: {
        type: [StoryCity]
    }
});

const CharacterSchema = new mongoose.Schema({
    name: String,
    features: [FeaturesSchema],
    quests: [QuestSchema],
    inventory: InventorySchema,
    story: StorySchema
});

module.exports = mongoose.model("Character", CharacterSchema);