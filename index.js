/**
 * @overview The development server's entry file.
 *
 * Here we load environmental variables and start the server.
 *
 * In production this is not necessary, since it's better to set env variables
 * directly in Heroku or other service provider.
 *
 * @author Diego Stratta <strattadb@gmail.com>
 * @license GPL-3.0
 */
'use strict';

import dotenv from 'dotenv';

// Load env variables with dotenv.
dotenv.load();

// This is a hack due to Node not supporting natively ES2015 modules.
const start = require('./src/server').default;

start();