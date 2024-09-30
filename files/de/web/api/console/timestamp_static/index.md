---
title: "console: timeStamp() statische Methode"
short-title: timeStamp()
slug: Web/API/console/timeStamp_static
l10n:
  sourceCommit: d2b78565fb33a7ebfa7314be61f6a887d2d90ace
---

{{APIRef("Console API")}}{{Non-standard_header}} {{AvailableInWorkers}}

Die **`console.timeStamp()`** statische Methode fügt einen einzelnen Marker im Performance-Tool des Browsers hinzu ([Firefox](https://profiler.firefox.com/docs/#/), [Chrome](https://developer.chrome.com/docs/devtools/performance/reference)). Dies ermöglicht es Ihnen, einen Punkt in Ihrem Code mit den anderen in der Zeitleiste aufgezeichneten Ereignissen, wie Layout- und Paint-Ereignissen, zu korrelieren.

Sie können optional ein Argument angeben, um den Zeitstempel zu beschriften, und diese Beschriftung wird dann neben dem Marker angezeigt.

## Syntax

```js-nolint
timeStamp(label)
```

### Parameter

- `label` {{Optional_Inline}}
  - : Beschriftung für den Zeitstempel.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`console.time()`](/de/docs/Web/API/Console/time_static)
- [`console.timeLog()`](/de/docs/Web/API/Console/timeLog_static)
- [`console.timeEnd()`](/de/docs/Web/API/Console/timeEnd_static)
- [Hinzufügen von Markern mit der Konsole API](https://web.archive.org/web/20211207010020/https://firefox-source-docs.mozilla.org/devtools-user/performance/waterfall/index.html#adding-markers-with-the-console-api)
