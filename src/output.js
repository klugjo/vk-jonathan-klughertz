import filendir from 'filendir';
import Promise from 'bluebird';
import moment from 'momentjs';
import os from 'os';

const writeFile = Promise.promisify(filendir.writeFile);

function findDuplicates(links) {
    const linksSorted = links.slice();
    linksSorted.sort();
    const duplicates = [];

    for (let i = 0; i < linksSorted.length; i = i + 1) {
        if (linksSorted[i] === linksSorted[i + 1]) {
            duplicates.push(linksSorted[i]);
        }
    }

    return duplicates;
}

function printResults(links, duplicates) {
    const eol = os.EOL;
    const date = moment();
    const dateReport = date;
    const dateFile = date.format('MM-DD-YYYY-HHmmss');
    const linksText = links.join(eol);
    const duplicatesText = duplicates.join(eol);
    const fileContent = `Report Date: ${dateReport}${eol}${eol}` +
            `Duplicates found: ${duplicates.length}${eol}${eol}` +
            `Duplicates: ${eol}${duplicatesText}${eol}${eol}` +
            `All Content Links: ${eol}${linksText}`;

    return writeFile(`${__dirname}/../output/report-${dateFile}`, fileContent);
}

export default function (links) {
    const duplicates = findDuplicates(links);

    return printResults(links, duplicates).then(() => {
        console.log(`Analysis Complete: \nDuplicated content found: ${duplicates.length}`); // eslint-disable-line no-console
    });
}
