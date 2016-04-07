import jquery from '../../src/parser/jquery';
import {expect} from 'chai';

describe('jQuery Parser', () => {

    const htmlBody = `<!DOCTYPE html><html><body><a href="/page1">link 1</a><a href='/page2'>link 2</a></body></html>`;

    it('finds all the links on the page', () => {

        var links = jquery(htmlBody);

        expect(links[0]).to.equal('/page1');
        expect(links[1]).to.equal('/page2');
    });

    it(`detects links declared with " and '`, () => {

        var links = jquery(htmlBody);

        expect(links[0]).to.equal('/page1');
        expect(links[1]).to.equal('/page2');
    });
});