import config from '../configuration';
import scraper from './scraper';
import filter from './filter';
import output from './output';

// Get the HTML body from configured URL
scraper(config.scrapeUrl)

    // Parse the HTMl to retrieve the links
    .then(config.parser)

    // Filter out the links irrelevant links
    .then(links => filter(links, config.linkMatches))

    // Output the results
    .then(output);
