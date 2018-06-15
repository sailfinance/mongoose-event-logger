const host = process.env.EVENTS_LOGGER_DB_HOST || 'localhost';
const port = process.env.EVENTS_LOGGER_DB_HOST_PORT || 27017;

module.exports = {
  url: `mongodb://${host}:${port}/event-log`,
  collection: 'events',
  shutdownOnSignal: true,
};
