var hyperquest = require('hyperquest');
var concat = require('concat-stream');
var regescape = require('regex-escape');

var prefix = "http://doodle.com/poll/";

module.exports = function(pollId, cb) {
    var magic = '{"poll":{"prettyUrl":"' + prefix + pollId.substr(0,16) + '"';
    hyperquest(prefix + pollId + "/admin").pipe(concat(function(buffer) {
        var page = buffer.toString('utf-8');
        var re = "(" + regescape(magic)+".*)\\s*\\)\\s*;$";
        var match = page.match(new RegExp(re,'m'));
        if (!match) {
            return cb(new Error('magic string not found in response from doodle.com'));
        }
        var result;
        try {
            result = JSON.parse(match[1]);
        } catch(err) {
            return cb(new Error('JSON parse error in response from doodle.com' + err.message));
        }
        cb(null, result);
    }));
};
