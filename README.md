*Assignement by Jonathan Klughertz.*

# A) Approach

After examination of the traffic and the HTML source, it appears that the views are generated on the server. Since I am not able to call a REST API to analyse the data, I have no choice but to scrape the page.

## From a high level perspective, I will have to:

- Make a request to the website
- Extract all the links URLs
- Check for duplicates

## In Practice

### Scraping:

A simple request to the website is enough to get the content. I have used [request](https://github.com/request/request) in the past and it works great. It worked great again here.

### Link extraction

There are 2 main routes I could have gone here and I decided to implement both to check the performances. 

#### 1) creating a virtual DOM then using jQuery to parse to content.

**Plus:** Easy to implement (took me less than 5 minutes)

**Minus:** Sub optimal performance (~ 53.338ms on my machine) and prone to errors if HTML so malformed.

#### 2) Parsing the raw HTML with a Regexp

**Plus:** Excellent performance (~ 0.676ms on my machine). That is around 80 times faster than jQuery.

**Minus:** Took me longer to implement, around 15-20 min.

### Analysis

#### 1) Filtering out the non content links

I am only keeping the links to the configured media contents.

#### 2) Consolidating the data

It appears at this point that all links come in pairs most of the time (one link for the image followed by one link for the text). All these ‘pairs’ need to be grouped.

### Reporting

All that is left to do is find the duplicates, print out the results in the console and generate a quick txt report.

# B) Best Solution

The jQuery solution is easier to implement, debug and the code is easier to read. But the performance is really bad compared to the RegExp. 
The RegExp route is harder to code and produced uglier code but the execution is lightning fast in comparison to the jQuery solution.

Putting things back into perspective, it appears that the parsing only account for less than 25% of the full execution time, as most of the time is spent making the request to the server and getting back the page.

If this code was part of some end to end or integration tests, I would most probably go the jQuery path. In a suite of long running tests, a few ms difference aren't that much, and readability is a big deal (jQuery is a lot more populat with JS devs than RegExp).

Alternatively, the check could really be done on the server before generating the views as the data is already available, formatted properly and a lot more reliable as well.

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

## Linting

```
$ npm run lint
```

## Configuration

The configuration is done in `configuration.js`.

- `scrapeUrl`: URL of the website to analyse.
- `linkMatches`: Array of URLs to match. Links that start with one of these will be included.
- `parser`: choose in between the jQuery or RegExp parser.
