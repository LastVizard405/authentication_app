const bcrypt = require('bcrypt');
const { loginServices } = require('../services/user.services');

const credentials = async (req, res, next) => {
	const { email, password } = req.body;

	const user = await loginServices(email);
	if (!user) return res.status(401).json({ error: 'Error, invalid credentials' });

	const isValid = await bcrypt.compare(password, user.password);
	if (!isValid) return res.status(401).json({ error: 'Error, invalid credentials' });

	req.userLogin = user;

	next();
};

module.exports = credentials;
