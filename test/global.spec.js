const { expect } = require('chai');

const TextTime = require('../lib/index');

describe('Global', () => {
  it('should convert 4 hours to second', () => {
    const tt = new TextTime();

    expect(tt('4 hours')).to.eq(3600 * 4);
  });

  it('should convert 4 days to second', () => {
    const tt = new TextTime();

    expect(tt('4 days')).to.eq(3600 * 4 * 24);
  });

  it('should convert 4 days to hour', () => {
    const tt = new TextTime({ output: 'hour' });

    expect(tt('4 days')).to.eq(4 * 24);
  });

  it('should convert 4 days to milliseconds', () => {
    const tt = new TextTime({ output: 'ms' });

    expect(tt('4 days')).to.eq(3600 * 4 * 24 * 1000);
  });
});
