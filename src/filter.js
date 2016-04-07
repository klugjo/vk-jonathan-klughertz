function filterOutNonContentLinks(links, linkMatches) {
    const len = linkMatches.length;

    return links.filter(link => {
        for (let i = 0; i < len; i = i + 1) {
            if (link.startsWith(linkMatches[i])) {
                return true;
            }
        }
        return false;
    });
}

function filterOutDoubles(links) {
    const result = [];

    links.forEach((link, i) => {
        let isDouble = false;

        if (i === 0) {
            isDouble = false;
        } else if (i === 1) {
            isDouble = links[1] === links[0];
        } else if (i > 1) {
            // 3 in a row is not a double anymore
            isDouble = links[i] === links[i - 1] && links[i] !== links[i - 2] ||
                links[i] === links[i - 1] && links[i] === links[i - 2] && links[i] === links[i - 3];
        }

        if (!isDouble) {
            result.push(link);
        }
    });

    return result;
}

export default function (links, linkMatches) {
    let result = filterOutNonContentLinks(links, linkMatches);
    result = filterOutDoubles(result);

    return result;
}
