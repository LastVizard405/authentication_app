const Post = require('../models/Post');
const User = require('../models/User');

const getAllServices = async () => {
	return await Post.findAll({ include: User });
};

const createServices = async (post) => {
	return await Post.create(post);
};

const getOneServices = async (id) => {
	return await Post.findByPk(id, { include: User });
};

const removeServices = async (id) => {
	return await Post.destroy({ where: { id } });
};

const updateServices = async (id, post) => {
	return await Post.update(post, { where: { id }, returning: true });
};

const ownerServices = async (id) => {
	return await Post.findByPk(id);
};

module.exports = { getAllServices, createServices, getOneServices, removeServices, updateServices, ownerServices };
