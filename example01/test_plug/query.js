/**
 * Created by Administrator on 13-11-4.
 */
var app = require('../..').App;
var App = new app();
var query = require('../..').query;

App.use(query);
App.get('/about',function(req,res){
  res.write('this is query :'+ req.query.name);
  res.end();
})
App.listen(3000);