/**
 * Copyright 2014 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

var apirequest = require('../../lib/apirequest');
var createAPIRequest = apirequest.createAPIRequest;
var checkRequired = apirequest.checkRequired;
var extend = require('../../lib/utils').extend;

/**
 * Ad Exchange Seller API
 *
 * @classdesc Gives Ad Exchange seller users access to their inventory and the ability to generate reports
 * @namespace adexchangeseller
 * @version  v1.1
 * @variation v1.1
 * @this Adexchangeseller
 * @param {object=} options Options for Adexchangeseller
 */
function Adexchangeseller(options) {

  var self = this;
  this._options = options || {};

  this.accounts = {

    /**
     * adexchangeseller.accounts.get
     *
     * @desc Get information about the selected Ad Exchange account.
     *
     * @alias adexchangeseller.accounts.get
     * @memberOf! adexchangeseller(v1.1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.accountId - Account to get information about. Tip: 'myaccount' is a valid ID.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['accountId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/adexchangeseller/v1.1/accounts/' + params.accountId,
        method: 'GET'
      };

      delete params.accountId;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.adclients = {

    /**
     * adexchangeseller.adclients.list
     *
     * @desc List all ad clients in this Ad Exchange account.
     *
     * @alias adexchangeseller.adclients.list
     * @memberOf! adexchangeseller(v1.1)
     *
     * @param  {object=} params - Parameters for request
     * @param  {integer=} params.maxResults - The maximum number of ad clients to include in the response, used for paging.
     * @param  {string=} params.pageToken - A continuation token, used to page through ad clients. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/adexchangeseller/v1.1/adclients',
        method: 'GET'
      };

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.adunits = {

    /**
     * adexchangeseller.adunits.get
     *
     * @desc Gets the specified ad unit in the specified ad client.
     *
     * @alias adexchangeseller.adunits.get
     * @memberOf! adexchangeseller(v1.1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.adClientId - Ad client for which to get the ad unit.
     * @param  {string} params.adUnitId - Ad unit to retrieve.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['adClientId', 'adUnitId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/adexchangeseller/v1.1/adclients/' + params.adClientId + '/adunits/' + params.adUnitId,
        method: 'GET'
      };

      delete params.adClientId;
      delete params.adUnitId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * adexchangeseller.adunits.list
     *
     * @desc List all ad units in the specified ad client for this Ad Exchange account.
     *
     * @alias adexchangeseller.adunits.list
     * @memberOf! adexchangeseller(v1.1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.adClientId - Ad client for which to list ad units.
     * @param  {boolean=} params.includeInactive - Whether to include inactive ad units. Default: true.
     * @param  {integer=} params.maxResults - The maximum number of ad units to include in the response, used for paging.
     * @param  {string=} params.pageToken - A continuation token, used to page through ad units. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['adClientId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/adexchangeseller/v1.1/adclients/' + params.adClientId + '/adunits',
        method: 'GET'
      };

      delete params.adClientId;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.alerts = {

    /**
     * adexchangeseller.alerts.list
     *
     * @desc List the alerts for this Ad Exchange account.
     *
     * @alias adexchangeseller.alerts.list
     * @memberOf! adexchangeseller(v1.1)
     *
     * @param  {object=} params - Parameters for request
     * @param  {string=} params.locale - The locale to use for translating alert messages. The account locale will be used if this is not supplied. The AdSense default (English) will be used if the supplied locale is invalid or unsupported.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/adexchangeseller/v1.1/alerts',
        method: 'GET'
      };

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.customchannels = {

    /**
     * adexchangeseller.customchannels.get
     *
     * @desc Get the specified custom channel from the specified ad client.
     *
     * @alias adexchangeseller.customchannels.get
     * @memberOf! adexchangeseller(v1.1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.adClientId - Ad client which contains the custom channel.
     * @param  {string} params.customChannelId - Custom channel to retrieve.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['adClientId', 'customChannelId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/adexchangeseller/v1.1/adclients/' + params.adClientId + '/customchannels/' + params.customChannelId,
        method: 'GET'
      };

      delete params.adClientId;
      delete params.customChannelId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * adexchangeseller.customchannels.list
     *
     * @desc List all custom channels in the specified ad client for this Ad Exchange account.
     *
     * @alias adexchangeseller.customchannels.list
     * @memberOf! adexchangeseller(v1.1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.adClientId - Ad client for which to list custom channels.
     * @param  {integer=} params.maxResults - The maximum number of custom channels to include in the response, used for paging.
     * @param  {string=} params.pageToken - A continuation token, used to page through custom channels. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['adClientId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/adexchangeseller/v1.1/adclients/' + params.adClientId + '/customchannels',
        method: 'GET'
      };

      delete params.adClientId;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.metadata = {

    dimensions: {

      /**
       * adexchangeseller.metadata.dimensions.list
       *
       * @desc List the metadata for the dimensions available to this AdExchange account.
       *
       * @alias adexchangeseller.metadata.dimensions.list
       * @memberOf! adexchangeseller(v1.1)
       *
       * @param  {object=} params - Parameters for request
       * @param  {callback=} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
        var params = extend({}, params); // shallow copy
        var isMedia = false;
        var options = {
          url: 'https://www.googleapis.com/adexchangeseller/v1.1/metadata/dimensions',
          method: 'GET'
        };

        return createAPIRequest(self, params, options, isMedia, callback);
      }

    },
    metrics: {

      /**
       * adexchangeseller.metadata.metrics.list
       *
       * @desc List the metadata for the metrics available to this AdExchange account.
       *
       * @alias adexchangeseller.metadata.metrics.list
       * @memberOf! adexchangeseller(v1.1)
       *
       * @param  {object=} params - Parameters for request
       * @param  {callback=} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
        var params = extend({}, params); // shallow copy
        var isMedia = false;
        var options = {
          url: 'https://www.googleapis.com/adexchangeseller/v1.1/metadata/metrics',
          method: 'GET'
        };

        return createAPIRequest(self, params, options, isMedia, callback);
      }

    }

  };

  this.preferreddeals = {

    /**
     * adexchangeseller.preferreddeals.get
     *
     * @desc Get information about the selected Ad Exchange Preferred Deal.
     *
     * @alias adexchangeseller.preferreddeals.get
     * @memberOf! adexchangeseller(v1.1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.dealId - Preferred deal to get information about.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    get: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['dealId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/adexchangeseller/v1.1/preferreddeals/' + params.dealId,
        method: 'GET'
      };

      delete params.dealId;

      return createAPIRequest(self, params, options, isMedia, callback);
    },

    /**
     * adexchangeseller.preferreddeals.list
     *
     * @desc List the preferred deals for this Ad Exchange account.
     *
     * @alias adexchangeseller.preferreddeals.list
     * @memberOf! adexchangeseller(v1.1)
     *
     * @param  {object=} params - Parameters for request
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/adexchangeseller/v1.1/preferreddeals',
        method: 'GET'
      };

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.reports = {

    /**
     * adexchangeseller.reports.generate
     *
     * @desc Generate an Ad Exchange report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.
     *
     * @alias adexchangeseller.reports.generate
     * @memberOf! adexchangeseller(v1.1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string=} params.dimension - Dimensions to base the report on.
     * @param  {string} params.endDate - End of the date range to report on in "YYYY-MM-DD" format, inclusive.
     * @param  {string=} params.filter - Filters to be run on the report.
     * @param  {string=} params.locale - Optional locale to use for translating report output to a local language. Defaults to "en_US" if not specified.
     * @param  {integer=} params.maxResults - The maximum number of rows of report data to return.
     * @param  {string=} params.metric - Numeric columns to include in the report.
     * @param  {string=} params.sort - The name of a dimension or metric to sort the resulting report on, optionally prefixed with "+" to sort ascending or "-" to sort descending. If no prefix is specified, the column is sorted ascending.
     * @param  {string} params.startDate - Start of the date range to report on in "YYYY-MM-DD" format, inclusive.
     * @param  {integer=} params.startIndex - Index of the first row of report data to return.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    generate: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['startDate', 'endDate']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/adexchangeseller/v1.1/reports',
        method: 'GET'
      };

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };

  this.urlchannels = {

    /**
     * adexchangeseller.urlchannels.list
     *
     * @desc List all URL channels in the specified ad client for this Ad Exchange account.
     *
     * @alias adexchangeseller.urlchannels.list
     * @memberOf! adexchangeseller(v1.1)
     *
     * @param  {object} params - Parameters for request
     * @param  {string} params.adClientId - Ad client for which to list URL channels.
     * @param  {integer=} params.maxResults - The maximum number of URL channels to include in the response, used for paging.
     * @param  {string=} params.pageToken - A continuation token, used to page through URL channels. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
     * @throws {Error} If a required parameter is missing.
     * @param  {callback=} callback - The callback that handles the response.
     * @return {object} Request object
     */
    list: function(params, callback) {
      var params = extend({}, params); // shallow copy
      checkRequired(params, ['adClientId']);
      var isMedia = false;
      var options = {
        url: 'https://www.googleapis.com/adexchangeseller/v1.1/adclients/' + params.adClientId + '/urlchannels',
        method: 'GET'
      };

      delete params.adClientId;

      return createAPIRequest(self, params, options, isMedia, callback);
    }

  };
}

/**
 * Exports Adexchangeseller object
 * @type Adexchangeseller
 */
module.exports = Adexchangeseller;