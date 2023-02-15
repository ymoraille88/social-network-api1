const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/userController');

// /api/UsersgetUsers
router.route('/')
.get(getUsers)
.post(createUser);

// /api/UsersgetUsers/:UserId
router
.route('/:userId')
.get(getSingleUser)
.put(updateUser)
.delete(deleteUser);

// /api/UsersgetUsers/:UserId/friends
router
.route('/:userId/friends')
.post(addFriend)
.delete(removeFriend);

module.exports = router;
