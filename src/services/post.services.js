const Post = require('../models/Post');

const getAllServices = async (userId) => {
	return await Post.findAll({ where: { userId } });
};

const createServices = async (post) => {
	return await Post.create(post);
};

const getOneServices = async (id) => {
	return await Post.findByPk(id);
};

const removeServices = async (id) => {
	return await Post.destroy({ where: { id } });
};

const updateServices = async (id, post) => {
	return await Post.update(post, { where: { id }, returning: true });
};

module.exports = { getAllServices, createServices, getOneServices, removeServices, updateServices };
