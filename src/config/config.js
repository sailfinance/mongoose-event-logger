const NODE_ENV = process.env.NODE_ENV || 'development';
module.exports = require(`./env/${NODE_ENV}.js`);
