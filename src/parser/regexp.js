export default function (body) {
    // console.time('regexp');

    const links = [];

    // Use Regex to get all the links (i.e href="*")
    body.replace(/href=("|')([^\'\"]+)/gi, (m0, m1, link) => links.push(link));

    // console.timeEnd('regexp');

    return links;
}
