const env = process.env;

module.exports = {
  ports: {
    http: env.PORT,
    debug: 5858
  },
  loglevel: 'info',
  showStack: false,
  connections: {
    redis: env.REDIS_URL,
    mongoUrl: env.MONGODB_URI
  }
};