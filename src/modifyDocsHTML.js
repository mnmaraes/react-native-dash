var cheerio = require('cheerio');
var fs = require('fs');
var config = require('./config');
var indexedFiles = require('./indexedFiles');

// remove the left column and the nav bar so that it fits dash's usually small
// browser screen
indexedFiles.forEach(function(array, index) {
    //console.log(array);
    var path = __dirname + '/../Contents/Resources/Documents/' + config.name + '/docs/' + array.name + '.html';
    var src = fs.readFileSync(path, 'utf8');
    var $ = cheerio.load(src);

    var headerClasses = config.pageSubHeaders.toString();
    var $headers = $(headerClasses);

    $headers.each(function(index, elem) {
        $('.edit-github').remove();
        var name = $($(elem).contents().get(1)).text();

        // TODO: Change "array.toc to somehting more relevant on a page-by-page basis in indexedFiles.js"
        $(elem).prepend('<a name="//apple_ref/cpp/' + array.toc + '/' + encodeURIComponent(name) + '" class="dashAnchor"></a>');
        $.html();
    });

    $('.nav-main').remove();
    $('.nav-docs').remove();
    $('.container').attr('style', 'min-width:inherit;padding-top:0');
    $('.wrap').attr('style', 'width:inherit;');
    $('.inner-content').attr('style', 'float:none;margin:auto;');

    fs.writeFileSync(path, $.html(), 'utf8');
});
