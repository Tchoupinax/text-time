# text-time

**text-time** is a tool to help you to parse text that contain time data to seconds

:warning: Node.js >= 14 is required (Open an issue if you require a lower version of Node.js and explain why)

## Motivations

I noticed in my experience that some config contains time in second and like it is an environment variable or a JSON file, I could not write time with this format: `60 * 60 * 24` (means 1 day). This format allows you to easily understand what time it represents, compared to `86400`. I thought it will be very fun if in my configuration, I may write `1 day`. This project is the purpose.

## Usage

```js
const TextTime = require('text-time');

const tt = new TextTime();
console.log(tt('4 months')); // 10368000
```

## Features

- :zap: International ! (Supports :fr: and :uk:)
- change the output format

### API

### `constructor - new TextTime({ output })`

- `output`: By default, the time is returned in second. You can change the unit like you want.

| unit                     | EN                     | FR                                     |
| ------------------------ | ---------------------- | -------------------------------------- |
| second                   | `second`, `seconds`    | `seconde`, `secondes`                  |
| minute                   | `minute`, `minutes`    | `minute`, `minutes`                    |
| hour                     | `hour`, `hours`        | `heure`, `heures`                      |
| day                      | `day`, `days`          | `jour`, `jours`, `journée`, `journées` |
| month                    | `month`, `months`      | `mois`                                 |
| year                     | `year`, `years`        | `an`, `ans`, `année`, `années`         |

### Todo

- [x] Extract all time unit from text
- [x] Handle several output unit
- [ ] Handle writed number with letter (help: https://github.com/finnfiddle/words-to-numbers)
