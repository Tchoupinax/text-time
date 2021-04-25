const { expect } = require('chai');
const { extract } = require('./parser');

describe('parser', () => {
  describe('English', () => {
    it('should parse 7 seconds to 7 seconds', () => {
      expect(extract('7 seconds')).to.eq(7);
    });

    it('should parse 63 minutes to 3780 seconds', () => {
      expect(extract('63 minutes')).to.eq(3780);
    });

    it('should parse 4 hours to 14400 seconds', () => {
      expect(extract('4 hours')).to.eq(3600 * 4);
    });

    it('should parse 5 days to 345600 seconds', () => {
      expect(extract('5 days')).to.eq(3600 * 24 * 5);
    });

    it('should parse 4 months to 10368000 seconds', () => {
      expect(extract('4 months')).to.eq(10368000);
    });

    it('should parse 5 years to 4733640000 seconds', () => {
      expect(extract('5 years')).to.eq(157788000);
    });
  });

  describe('French', () => {
    it('should parse 7 secondes to 7 seconds', () => {
      expect(extract('7 secondes')).to.eq(7);
    });

    it('should parse 63 minutes to 3780 seconds', () => {
      expect(extract('63 minutes')).to.eq(3780);
    });

    it('should parse 4 heures to 14400 seconds', () => {
      expect(extract('4 heures')).to.eq(3600 * 4);
    });

    it('should parse "dans 4 heures" to 14400 seconds', () => {
      expect(extract('dans 4 heures')).to.eq(3600 * 4);
    });

    it('should parse 5 jours to 345600 seconds', () => {
      expect(extract('5 jours')).to.eq(3600 * 24 * 5);
    });

    it('should parse 4 mois to 10368000 seconds', () => {
      expect(extract('4 mois')).to.eq(3600 * 24 * 30 * 4);
    });

    it('should parse 5 années to 473364000 seconds', () => {
      expect(extract('5 années')).to.eq(157788000);
    });

    it('should parse 15 ans to 473364000 seconds', () => {
      expect(extract('15 ans')).to.eq(473364000);
    });

    it('should parse "dans 15 ans" to 473364000 seconds', () => {
      expect(extract('dans 15 ans')).to.eq(473364000);
    });

    describe('more complexe cases', () => {
      it('should parse 4 jours et 8 heures to 374400', () => {
        expect(extract('4 jours et 8 heures')).to.eq(374400);
      });
    });
  });
});
