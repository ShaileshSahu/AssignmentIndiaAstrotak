import express from 'express';
import * as users from './user/v1/route.js';
import * as misc from './misc/v1/route.js'
import * as family from './family/v1/route.js';
const Router = express.Router();

// This is the main module router where the whole route start processing !!
Router.use(users.Path, users.Router);
Router.use(misc.Path, misc.Router);
Router.use(family.Path, family.Router);

export default Router;