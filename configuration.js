// import regexpParser from './src/parser/regexp';
import jquery from './src/parser/jquery';

export default {
    scrapeUrl: 'https://www.viki.com/',
    linkMatches: [
        '/tv/',
        '/videos/',
        '/celebrities/'
    ],
    parser: jquery // regexpParser
};
