import cheerio from 'cheerio';

export default function (body) {
    // console.time('jquery');

    const links = [];
    const $ = cheerio.load(body);

    $('[href]').each(function getLink() {
        const attr = $(this).attr('href');
        if (attr) {
            links.push(attr);
        }
    });

    // console.timeEnd('jquery');

    return links;
}
