const { Thought, User } = require('../models');

module.exports = {
    
    // Get all thoughts
    getThoughts(req, res) {
      Thought.find()
        .then((thoughts) => res.json(thoughts))
        .catch((err) => res.status(500).json(err));
    },
    // Get a thought
    getSingleThought(req, res) {
      Thought.findOne({ _id: req.params.thoughtId })
        .select('-__v')
        .then((thought) =>
          !thought
            ? res.status(404).json({ message: 'No thought with that ID' })
            : res.json(thought)
        )
        .catch((err) => res.status(500).json(err));
    },
    // Create a thought
    createThought(req, res) {
      thought.create(req.body)
        .then((thought) => res.json(thought))
        .catch((err) => {
          console.log(err);
          return res.status(500).json(err);
        });
    },
    // Delete a thought
    deleteThought(req, res) {
      Thought.findOneAndDelete({ _id: req.params.thoughtId })
        .then((thought) =>
          !thought
            ? res.status(404).json({ message: 'No thought with that ID' })
            : User.deleteMany({ _id: { $in: thought.users } })
        )
        .then(() => res.json({ message: 'thought and users deleted!' }))
        .catch((err) => res.status(500).json(err));
    },
    // Update a thought
    updateThought(req, res) {
      Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { runValidators: true, new: true }
      )
        .then((thought) =>
          !thought
            ? res.status(404).json({ message: 'No thought with this id!' })
            : res.json(thought)
        )
        .catch((err) => res.status(500).json(err));
    },
    // Get all reaction
    getReactions(req, res) {
      Reaction.find()
        .then((reactions) => res.json(reactions))
        .catch((err) => res.status(500).json(err));
    },
    // Get a Reaction
    getSingleReaction(req, res) {
      Reaction.findOne({ _id: req.params.reactionId })
        .select('-__v')
        .then((reaction) =>
          !reaction
            ? res.status(404).json({ message: 'No reaction with that ID' })
            : res.json(reaction)
        )
        .catch((err) => res.status(500).json(err));
    },
    // Create a reaction
    createReaction(req, res) {
      Reaction.create(req.body)
        .then((reaction) => res.json(reaction))
        .catch((err) => {
          console.log(err);
          return res.status(500).json(err);
        });
    },
    // Delete a reaction
    deleteReaction(req, res) {
      Reaction.findOneAndDelete({ _id: req.params.reactionId })
        .then((reaction) =>
          !reaction
            ? res.status(404).json({ message: 'reaction with that ID' })
            : User.deleteMany({ _id: { $in: reaction.users } })
        )
        .then(() => res.json({ message: 'reaction deleted!' }))
        .catch((err) => res.status(500).json(err));
    },
    // Update a reaction
    updateReaction(req, res) {
      Reaction.findOneAndUpdate(
        { _id: req.params.reactionId },
        { $set: req.body },
        { runValidators: true, new: true }
      )
        .then((reaction) =>
          !reaction
            ? res.status(404).json({ message: 'No reaction with this id!' })
            : res.json(reaction)
        )
        .catch((err) => res.status(500).json(err));
    },


};
