'use strict';

const logger = require('../utils/logger');

const welcome = {
  index(request, response) {
    logger.info('welcome rendering');
    const viewData = {
      title: 'Welcome to Playlist 1',
    };
    response.render('welcome', viewData);
  },
};

module.exports = welcome;
