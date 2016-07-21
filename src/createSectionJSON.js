var cheerio = require('cheerio');
var fs = require('fs');
var config = require('./config');

// get base file to itterate over
var basePath = __dirname + '/../Contents/Resources/Documents/' + config.name + '/docs/' + config.index;
var baseSrc = fs.readFileSync(basePath, 'utf8');
var $ = cheerio.load(baseSrc);
var pageNamesArray = [];
var $section = $('.' + config.sectionClass);
var path = __dirname + '/../src/indexedFiles.js';

$section.each(function(i, elem){

    // TODO: create a better config pointer
    var $sectionHeader = $(this).children(config.headerTag).text();
    var $sectionLink = $(this).children('ul').children('li').children('a');

    $sectionLink.each(function(i, elem){
        var page = {};
        var excludeArray = $(this).text();

        if(config.ignoreSection.sectionsArray.indexOf($sectionHeader) !== -1) {
            return;
        }

        // $(this).attr('href') returns ie.(guides-containers.html#content)
        // substring removes last 5 characters '.html' from href.
        page.name = $(this).attr('href').substring(0, $(this).attr('href').length - 5);

        if(config.ignorePage.pagesArray.indexOf(excludeArray) !== -1) {
            return;
        }

        // set the Dash types based on the doc headers.
        switch ($sectionHeader) {
            case 'components':
                page.type = 'Components';
                page.toc = 'Property';
                break;
            case 'apis':
                page.type = 'Library';
                page.toc = 'Property';
                break;
            case 'Polyfills':
                page.type = 'Extension';
                page.toc = 'Property';
                break;
            default:
                page.type = config.defaultPageType;
                page.toc = config.defaultPageTOC;
        };
        pageNamesArray.push(page);
    });
});

fs.writeFile(path, 'var indexedFiles = ' + JSON.stringify(pageNamesArray, null, 4) + ';\n\nmodule.exports = indexedFiles;', 'utf8');
