const { expect } = require('chai');
const Regex = require('../../lib/regex-constants');

const TextTime = require('../../lib/index');

describe('should return an ISO 8601 string if keyword "in" is detected', () => {
  describe('French', () => {
    it('should return an ISO string in 15 days for "dans 15 jours', () => {
      const tt = new TextTime();

      // Compare the date between a range of 5 ms because the output date could differ
      // according the power of the computer
      const expectingA = Date.now() + 3600 * 24 * 15 * 1000 - 5;
      const expectingB = Date.now() + 3600 * 24 * 15 * 1000 + 5;

      const futureDate = tt('dans 15 jours');

      expect(futureDate).to.match(Regex.ISO8601String);
      expect(new Date(futureDate).getTime()).to.greaterThanOrEqual(expectingA);
      expect(new Date(futureDate).getTime()).to.lessThanOrEqual(expectingB);
    });

    it('should return an ISO string in 1 day for "dans 1 jour', () => {
      const tt = new TextTime();

      // Compare the date between a range of 5 ms because the output date could differ
      // according the power of the computer
      const expectingA = Date.now() + 3600 * 24 * 1000 - 5;
      const expectingB = Date.now() + 3600 * 24 * 1000 + 5;

      const futureDate = tt('dans 1 jour');

      expect(futureDate).to.match(Regex.ISO8601String);
      expect(new Date(futureDate).getTime()).to.greaterThanOrEqual(expectingA);
      expect(new Date(futureDate).getTime()).to.lessThanOrEqual(expectingB);
    });
  });
});
