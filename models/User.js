const { Schema, model } = require('mongoose');

// Schema to create user model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
      
    },
    thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Thought',
    },
],
    friends: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
],

  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);


userSchema.virtual('friendcount').get(function (){
    return this.friends.length;
});


const User = model('User', userSchema);

module.exports = User;
