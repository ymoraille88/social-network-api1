const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            maxlength: 280,

        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (date) => timeSince(date),

        },
        username: {
            type: String,
            required: true,
        },
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);
const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),


        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280,

        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (date) => timeSince(date),

        },
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);




const Thought = model('thought', thoughtSchema);
const Reaction = model('reaction', reactionSchema);

module.exports = Thought, Reaction;



