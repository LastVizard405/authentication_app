const Post = require('./Post');
const User = require('./User');

Post.belongsTo(User);
User.hasMany(Post);

Post.belongsToMany(User, { through: 'favorites', as: 'user_id' });
User.belongsToMany(Post, { through: 'favorites', as: 'post_id' });
