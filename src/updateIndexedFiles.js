var cheerio = require('cheerio');
var fs = require('fs');
var config = require('./config');
var path = __dirname + '/../Contents/Resources/Documents/' + config.name + '/docs/webview.html';
var indexedFilesPath = './src/indexedFiles.json';
var src = fs.readFileSync(path, 'utf8');
var $ = cheerio.load(src);

var results = []
$('div.navGroups').each(function (index, elem) {
  var header_content = $(elem).find('h3').text()
  console.log(header_content)

  $(elem).find('li').each(function(i, li) {
    var arr = $(li).find('a').attr('href').split(/\.|\//)
    var name = arr[arr.length - 2]
    var type = header_content == 'Components' ? 'Components' : 'Guides'
    var toc = header_content == 'Components' ? 'Property' : 'Section'
    console.log({ name : name, type : type, toc : toc })
    results.push({ name : name, type : type, toc : toc })
  })
});

fs.writeFileSync(indexedFilesPath, JSON.stringify(results) , 'utf-8');

