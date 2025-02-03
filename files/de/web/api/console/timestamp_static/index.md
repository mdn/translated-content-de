---
title: "console: timeStamp() statische Methode"
short-title: timeStamp()
slug: Web/API/console/timeStamp_static
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef("Console API")}}{{Non-standard_header}} {{AvailableInWorkers}}

Die statische Methode **`console.timeStamp()`** fügt einen einzelnen Marker zum Performance-Tool des Browsers hinzu ([Firefox](https://profiler.firefox.com/docs/#/), [Chrome](https://developer.chrome.com/docs/devtools/performance/reference)). Dies ermöglicht es Ihnen, einen Punkt in Ihrem Code mit anderen Ereignissen in der Zeitleiste zu korrelieren, wie zum Beispiel Layout- und Malereignisse.

Sie können optional ein Argument angeben, um den Zeitstempel zu kennzeichnen, und dieses Label wird dann neben dem Marker angezeigt.

## Syntax

```js-nolint
console.timeStamp(label)
```

### Parameter

- `label` {{Optional_Inline}}
  - : Bezeichnung für den Zeitstempel.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`console.time()`](/de/docs/Web/API/Console/time_static)
- [`console.timeLog()`](/de/docs/Web/API/Console/timeLog_static)
- [`console.timeEnd()`](/de/docs/Web/API/Console/timeEnd_static)
- [Hinzufügen von Markern mit der Console-API](https://web.archive.org/web/20211207010020/https://firefox-source-docs.mozilla.org/devtools-user/performance/waterfall/index.html#adding-markers-with-the-console-api)
