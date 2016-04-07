import jquery from '../../src/parser/jquery';
import regexp from '../../src/parser/regexp';
import {expect} from 'chai';
import fs from 'fs';

describe('The Regexp and jQuery parser', () => {

    it('should return the same result on some real life example', () => {

        const htmlBody = fs.readFileSync(`${__dirname}/mock-html.txt`, 'utf8');

        const jqueryResult = jquery(htmlBody);
        const regexpResult = regexp(htmlBody);

        expect(jqueryResult).to.deep.equal(regexpResult);
    });
});