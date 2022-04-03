/*---------------------------------------------------------------
-                         API INDEX
---------------------------------------------------------------*/

const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes.js');
//const voteRoutes = require('./vote-routes.js');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
//router.use('/votes', voteRoutes);

module.exports = router;