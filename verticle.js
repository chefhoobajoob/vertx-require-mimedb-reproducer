exports.vertxStart = function() {
    console.log('>>> requiring urijs...');
    var URI = require('urijs');
    console.log('>>> parsing uri (sandwich://ham-and-cheese?mayo=heavy)');
    var parsed = URI.parse('sandwich://ham-and-cheese?mayo=heavy');
    console.log('>>> parse results ' + JSON.stringify(parsed));
}