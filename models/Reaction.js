const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ReactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
    },
    reactionBody: {
        type: String,
        required: 'Reaction body is Required',
        maxlength: 280
    },
    username: {
        type: String,
        required: 'Username is Required',
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => dateFormat(createdAtVal)
    },
}
);

const Reaction = model('Reaction', ReactionSchema);

module.exports = Reaction;