/**
 * Created by Administrator on 13-11-2.
 */
var fk = require('../..');
var App = fk.App;
var app = new App();
var static_middle = fk.static;
var aaa = 'hutu';
app.use(static_middle(__dirname + '/public'));
app.get(function(req,res){
  res.write("I am get method!");
  res.end();
})
app.post(function(req,res){
  res.write('I am post method!');
  res.end();
})
var aaa = 'ccc';
app.listen(3000);
console.log('with 3000 port success');

