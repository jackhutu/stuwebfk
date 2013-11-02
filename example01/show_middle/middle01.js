/**
 * Created by Administrator on 13-11-2.
 */
module.exports = function middle01(req,res,next){
  console.log('My name is middle01');
  next();
}