'use strict';

/**
 * care-home service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::care-home.care-home');
