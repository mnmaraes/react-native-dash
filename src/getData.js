var cheerio = require('cheerio');
var fs = require('fs');
var flatten = require('lodash.flatten');
var indexedFiles = require('./indexedFiles');

// this assumes build.sh has been run, and the react-native docs fetched into
// Contents/Resources/Documents/react-native
function getData() {
    var res = indexedFiles.map(function(array) {
        var path = __dirname + '/../Contents/Resources/Documents/react-native/docs/' + array.name + '.html';
        var src = fs.readFileSync(path, 'utf-8');
        var $ = cheerio.load(src);

        var $headers = $('.inner-content h1').first();

        var names = [];

        $headers.each(function(index, elem) {

            var name = $($(elem).contents()).text();

            names.push(name.trim());
        });

        var url = 'react-native/docs/' + array.name + '.html#';

        //console.log(names);

        var res = names.map(function(n, i) {

            //console.log('name:' + n);
            //console.log('type:' + array.type);
            //console.log('path:' + url);

            return {
                name: n,
                type: array.type,
                path: url + 'content',
            };
        });

        return res;
  });

  return flatten(res);
}

module.exports = getData;






