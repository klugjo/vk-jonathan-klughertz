*Assignement by Jonathan Klughertz.*

# A) Approach

After examination of the traffic and the HTML source, it appears that the views are generated on the server. Since I am not able to call a REST API to analyse the data, I have no choice but to scrape the page.

## From a high level perspective, I will have to:

- Make a request to the website
- Extract all the links URLs
- Check for duplicates

## In Practice

### Scraping:

A simple request to the website is enough to get the content. I have used ![request](https://github.com/request/request) in the past and it works great. It worked great again.

### Link extraction

There are 2 main routes I could go here and I decided to implement both to check the performances. 

- virtual DOM then using jQuery to parse to content.
Plus: Easy to implement (took me less than 5 minutes)
Minus: Sub optimal performance (~ 53.338ms on my machine) and prone to errors if HTML so malformed.

- Parsing the HTML with a Regexp
Plus: Excellent performance (~ 0.676ms on my machine). That is around 80 times faster than jQuery.
Minus: Took me longer to implement, around 15 min.

### Analysis

1) Filtering out the non content links

I am only keeping the links to media content (configurable in `configuration.js`)

2) Consolidating the data

It appeared at this point that all links come in pairs most of the time (one link for the image followed by one link for the text). All these ‘pairs’ need to be grouped.

### Reporting

At this point, all that is left to do is find the duplicates, print out the results in the console and generate a quick txt report.

# B) Best Solution

At this point it is obvious that the Regular Expression route was the best. But the time spent parsing the page is negligible compare to the time spent making the request and retrieving the data.

In a real world scenario, the check should really be done before generating the views as the data is already available and formatted properly.

# C) Instructions

## Installation

```
$ git clone https://github.com/klugjo/vk-jonathan-klughertz
$ cd vk-jonathan-klughertz
$ npm install
```

## Execution

```
$ npm start
```

## Tests

```
$ npm test
```

## Lint

```
$ npm run lint
```

## Configuration

The configuration is done in `configuration.js`.

- `scrapeUrl`: URL of the website to analyse.
- `linkMatches`: Array of URLs to match. Links that start with one of these will be included.
- `parser`: choose in between the jQuery or RegExp parser.
