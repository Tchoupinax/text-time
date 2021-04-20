const { expect } = require('chai');
const forEach = require('mocha-each');

const TextTime = require('../../lib/index');

describe('Check options behaviour for the constructor', () => {
  describe('should return the result formated with the provided ouput', () => {
    describe('hours', () => {
      forEach([
        ['hour', 'UK'],
        ['hours', 'UK'],
        ['heure', 'FR'],
        ['heures', 'FR'],
      ])
        .it('should recognize "%s" as a correct format for "hour" (%s)', (format) => {
          const tt = new TextTime({ output: format });
          expect(tt('3 days')).to.eq(72);
        });
    });

    describe('days', () => {
      forEach([
        ['day', 'UK'],
        ['days', 'UK'],
        ['jour', 'FR'],
        ['jours', 'FR'],
        ['journée', 'FR'],
        ['journées', 'FR'],
      ])
        .it('should recognize "%s" as a correct format for "day" (%s)', (format) => {
          const tt = new TextTime({ output: format });
          expect(tt('72 hours')).to.eq(3);
        });
    });

    describe('year', () => {
      forEach([
        ['year', 'UK'],
        ['years', 'UK'],
        ['an', 'FR'],
        ['ans', 'FR'],
        ['année', 'FR'],
        ['années', 'FR'],
      ])
        .it('should recognize "%s" as a correct format for "year" (%s)', (format) => {
          const tt = new TextTime({ output: format });
          expect(tt('24 mois')).to.eq(2);
        });
    });
  });
});
