const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

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
            get: (date) => dateFormat(date),

        },
        username: {
            type: String,
            required: true,
        },

    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    },
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
            get: (timestamp) => dateFormat(timestamp),

        },
       
    },
    {
    toJSON: {
        virtuals: true,
    },
    id: false,
}
);




const Thought = model('thought', thoughtSchema);


module.exports = Thought;



