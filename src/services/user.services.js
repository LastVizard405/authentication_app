const User = require('../models/User');

const getAllServices = async () => {
	return await User.findAll();
};

const createServices = async (user) => {
	return await User.create(user);
};

const getOneServices = async (id) => {
	return await User.findByPk(id);
};

const removeServices = async (id) => {
	return await User.destroy({ where: { id } });
};

const updateServices = async (id, user) => {
	return await User.update(user, { where: { id }, returning: true });
};

const loginServices = async (email) => {
	return await User.findOne({ where: { email } });
};

module.exports = { getAllServices, createServices, getOneServices, removeServices, updateServices, loginServices };
