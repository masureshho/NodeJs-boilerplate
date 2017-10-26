/* eslint-disable no-unused-vars,  no-param-reassign */
import { default as config } from 'config';
import _ from 'lodash';

export function handleResponse(req, res, next) { // eslint-disable-line no-unused-vars
  if (_.isEmpty(req.responseData)) {
    req.responseData = { success: true, date: new Date(), data:[] };
  }
  res.status(200).json(req.responseData);
}

export function handleError(err, req, res, next) {
  if (err.status) res.statusCode = err.status;
  if (res.statusCode < 400) res.statusCode = 500;
  req.headers = req.headers || {};
  const accept = req.headers.accept || '';
  // json
  if (~accept.indexOf('json')) {
    const error = { message: err.message };
    if (config.showErrors) error.stack = err.stack;
    Object.assign(error, err);
    const json = JSON.stringify({ error });
    res.setHeader('Content-Type', 'application/json');
    res.end(json);
  // plain text
  } else {
    res.setHeader('Content-Type', 'text/plain');
    res.end(err.message);
  }
}