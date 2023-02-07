const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  addfriend,
  removeFriend,
} = require('../../controllers/userController');

// /api/UsersgetUsers
router.route('/').get(getUsers).post(createUser);

// /api/UsersgetUsers/:UserId
router.route('/:userId').get(getSingleUser).delete(deleteUser);

// /api/UsersgetUsers/:UserId/friends
router.route('/:userId/friends').post(addFriend);

// /api/UsersgetUsers/:UserId/friends/:friendId
router.route('/:userId/friends/:friendId').delete(removeFriend);

module.exports = router;
