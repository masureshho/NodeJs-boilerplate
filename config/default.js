module.exports = {
  ports: {
    http: 8080,
    debug: 5858
  },
  loglevel: 'info',
  showStack: false,
  connections: {
    redis: '',
    mongoUrl: 'mongodb://localhost/dbName'
  }
};