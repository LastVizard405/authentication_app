const express = require('express');
const routerUser = require('./router/user.router');
const routerPost = require('./router/post.router');
const router = express.Router();

router.use('/users', routerUser);
router.use('/posts', routerPost);

module.exports = router;
