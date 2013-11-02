/**
 * Created by Administrator on 13-11-2.
 */
var app = require('../..').App;
var App = new app();
var middle01 = require('./middle01');
var middle02 = require('./middle02');
App.use(middle01);
App.use(middle02);
App.listen(3000);