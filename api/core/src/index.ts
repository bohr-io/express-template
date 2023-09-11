const serverless = require('serverless-http');
import app from './server';

module.exports.handler = serverless(app);