import { ANALYTICS_KEY, ANALYTICS_DISABLED_VALUE } from '@src/constants/analytics';
import userAgentService from '@src/services/user-agent';

const _public = {};

_public.init = ({ src, id, enabled }) => {
  if(!userAgentService.isBot() && statsEnabled(enabled)) {
    const tag = document.createElement('script');
    Object.entries(buildAttrs(src, id)).forEach(([key, value]) => tag.setAttribute(key, value));
    document.body.appendChild(tag);
  }
};

_public.track = (eventName, eventData) => {
  window.umami && window.umami.track && window.umami.track(eventName, eventData);
};

function statsEnabled(enabled){
  const params = new URLSearchParams(window.location.search);
  if(
    params.get(ANALYTICS_KEY) == ANALYTICS_DISABLED_VALUE ||
    window.localStorage.getItem(ANALYTICS_KEY) == ANALYTICS_DISABLED_VALUE
  ) {
    window.localStorage.setItem(ANALYTICS_KEY, ANALYTICS_DISABLED_VALUE);
    return false;
  }
  return enabled;
}

function buildAttrs(src, id){
  return {
    async: '',
    defer: '',
    'data-website-id': id,
    'data-stasta': '',
    src
  };
}

export default _public;
