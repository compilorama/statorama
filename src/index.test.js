import { mockSearchParams } from '@src/services/testing';
import userAgentService from '@src/services/user-agent';
import statorama from '.';

describe('Statorama', () => {
  beforeEach(() => {
    userAgentService.isBot = jest.fn(() => false);
  });

  afterEach(() => {
    mockSearchParams('');
    window.localStorage.removeItem('analytics');
  });

  function mockDefaultParams(){
    return { src: '/stats.js', id: '123' };
  }

  it('should not initialize stasta by default', () => {
    statorama.init(mockDefaultParams());
    const tag = document.querySelector('script[data-stasta]');
    expect(tag).toEqual(null);
  });

  it('should not initialize stasta if analytics is disabled via search params', () => {
    mockSearchParams('analytics=disabled');
    statorama.init({ ...mockDefaultParams(), enabled: true });
    const tag = document.querySelector('script[data-stasta]');
    expect(tag).toEqual(null);
  });

  it('should not initialize stasta if analytics is disabled via local storage', () => {
    window.localStorage.setItem('analytics', 'disabled');
    statorama.init({ ...mockDefaultParams(), enabled: true });
    const tag = document.querySelector('script[data-stasta]');
    expect(tag).toEqual(null);
  });

  it('should not initialize stasta if user agent is a bot', () => {
    userAgentService.isBot = jest.fn(() => true);
    statorama.init({ ...mockDefaultParams(), enabled: true });
    const tag = document.querySelector('script[data-stasta]');
    expect(tag).toEqual(null);
  });

  it('should initialize stasta', () => {
    statorama.init({ ...mockDefaultParams(), enabled: true });
    const tag = document.querySelector('script[data-stasta]');
    expect(tag.getAttribute('async')).toEqual('');
    expect(tag.getAttribute('defer')).toEqual('');
    expect(tag.getAttribute('data-website-id')).toEqual('123');
    expect(tag.getAttribute('src')).toEqual('/stats.js');
  });
});
