var dust = require('dustjs-linkedin'),
    memoize = require('memoizee'),
    fs = require('fs')

//This is a pre-memo method that reads and compiles a 
//TODO - I should probably manually memoize this with a fs.watchFile dumping the memo
//...but honestly, restart the server if a partial changes!
var __dust_compiled_url = function(url,cb) {
  if(url.match(/\.js$/)) {
    var dust_url = url.replace(/\.js$/,".dust");
    var file_path = __dirname + "/views" + dust_url;
      fs.readFile(file_path,function(err,data) {
        if(err) {
          cb(null);
        }
        
        var name = dust_url;
        name  = name.replace(/\.dust$/,"").replace(/^\//,"");


        var compiled = dust.compile(String(data),name);
        cb(compiled)
      })
  }
  else {
    cb(null);
  }
}
exports.dust_compiled_url = memoize(__dust_compiled_url,{async: true});

exports = function(root,options) {
  options = options || {};

  if(!root) throw new Error('partials() root path required');

  return function partials(req,res,next) {


  }
}
