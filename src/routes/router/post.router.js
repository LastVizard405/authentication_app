const { getAll, create, getOne, remove, update } = require('../../controllers/post.controllers');
const express = require('express');
const { verifyJWT } = require('../../utils/verifyJWT');

const routerPost = express.Router();

routerPost.route('/').get(getAll).post(verifyJWT, create);

routerPost.route('/:id').get(getOne).delete(verifyJWT, remove).put(verifyJWT, update);

module.exports = routerPost;
