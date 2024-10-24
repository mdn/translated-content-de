---
title: "console: timeStamp() statische Methode"
short-title: timeStamp()
slug: Web/API/console/timeStamp_static
l10n:
  sourceCommit: f2372e442803696ba0fe1c9804096065f2b42824
---

{{APIRef("Console API")}}{{Non-standard_header}} {{AvailableInWorkers}}

Die statische Methode **`console.timeStamp()`** fügt dem Performance-Tool des Browsers ([Firefox](https://profiler.firefox.com/docs/#/), [Chrome](https://developer.chrome.com/docs/devtools/performance/reference)) einen einzelnen Marker hinzu. Dies ermöglicht es Ihnen, einen Punkt in Ihrem Code mit anderen Ereignissen auf der Zeitachse zu korrelieren, wie z.B. Layout- und Zeichnungsereignisse.

Sie können optional ein Argument angeben, um den Zeitstempel zu kennzeichnen, und dieses Label wird dann zusammen mit dem Marker angezeigt.

## Syntax

```js-nolint
console.timeStamp(label)
```

### Parameter

- `label` {{Optional_Inline}}
  - : Kennzeichnung für den Zeitstempel.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`console.time()`](/de/docs/Web/API/Console/time_static)
- [`console.timeLog()`](/de/docs/Web/API/Console/timeLog_static)
- [`console.timeEnd()`](/de/docs/Web/API/Console/timeEnd_static)
- [Hinzufügen von Markern mit der Konsole API](https://web.archive.org/web/20211207010020/https://firefox-source-docs.mozilla.org/devtools-user/performance/waterfall/index.html#adding-markers-with-the-console-api)
