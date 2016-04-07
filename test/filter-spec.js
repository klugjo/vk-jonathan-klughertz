import filter from '../src/filter';
import {expect} from 'chai';

describe('The filter function', () => {

    it('only keeps links that start with the matches', () => {

        const links = ['aaaa', 'bbbb', 'cccc', 'ccaa', 'dbb', 'ab', 'eeaa'];
        const matches = ['aa', 'bb', 'ee'];

        const result = filter(links, matches);

        expect(result[0]).to.equal('aaaa');
        expect(result[1]).to.equal('bbbb');
        expect(result[2]).to.equal('eeaa');
    });

    it('removes pairs', () => {

        const links = ['ab', 'ab', 'ag', 'ac', 'ac', 'ae', 'af', 'ad', 'ad'];
        const matches = ['a'];

        const result = filter(links, matches);

        expect(result).to.deep.equal(['ab', 'ag', 'ac', 'ae', 'af', 'ad']);
    });

    it('should transform triples or quadruples to pairs', () => {

        const links = ['ab', 'ab', 'ab', 'ag', 'ac', 'ac', 'ac', 'ac', 'ae', 'af', 'ad', 'ad'];
        const matches = ['a'];

        const result = filter(links, matches);

        expect(result).to.deep.equal(['ab', 'ab', 'ag', 'ac', 'ac', 'ae', 'af', 'ad']);
    });

});