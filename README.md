# Statorama

> Analytics wrapper for Umami

[![CircleCI](https://circleci.com/gh/compilorama/statorama/tree/main.svg?style=svg)](https://circleci.com/gh/compilorama/statorama/tree/main)
[![Coverage Status](https://coveralls.io/repos/github/compilorama/statorama/badge.svg?branch=main)](https://coveralls.io/github/compilorama/statorama?branch=main)

## Installation

```
npm install @compilorama/statorama --save
```

## Usage

Analytics wrapper that adds a couple of functionalities on top of Umami SDK:
- Diasables tracking when a search param `analytics=disabled` is set.
- Diasables tracking when a local storage item with key/value `analytics=disabled` is found.
- Disables tracking when user agent is considered a bot.

### Initializating

By initializing the lib, page view will be tracked automatically

``` javascript
import statorama from '@compilorama/statorama';

statorama.init({
  // Source where Umami SDK is requested from (required)
  src: String,
  // Umami Website ID (required)
  id: String,
  // Enable/Diasable tracking arbitrarily (required)
  enabled: Boolean,
})
```

### Tracking Custom Events

``` javascript
import statorama from '@compilorama/statorama';

statorama.track(
  String, // Event Name (Ex.: 'Button Clicked')
  Object  // Event Data (Ex.: { name: 'Subscribe' })
)
```

## Contributing

1. Install [Node](https://nodejs.org/en/). Download the "Recommend for Most Users" version.

2. Clone the repo:
``` bash
git clone git@github.com:compilorama/statorama.git
```

3. Go to the project directory:
``` bash
cd statorama
```

4. Install the project dependencies:
``` bash
npm install
```

5. Build the project:
``` bash
npm run build
```

## Tests

Ensure that all code that you have added is covered with unit tests:
``` bash
npm run test -- --coverage
```
