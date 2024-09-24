---
title: "console: timeStamp() statische Methode"
short-title: timeStamp()
slug: Web/API/console/timeStamp_static
l10n:
  sourceCommit: d2b78565fb33a7ebfa7314be61f6a887d2d90ace
---

{{APIRef("Console API")}}{{Non-standard_header}} {{AvailableInWorkers}}

Die **`console.timeStamp()`** statische Methode fügt einen einzelnen Marker zum Performance-Tool des Browsers hinzu ([Firefox](https://profiler.firefox.com/docs/#/), [Chrome](https://developer.chrome.com/docs/devtools/performance/reference)). Dies ermöglicht es Ihnen, einen Punkt in Ihrem Code mit den anderen Ereignissen in der Zeitleiste, wie z.B. Layout- und Zeichen-Ereignissen, in Verbindung zu bringen.

Sie können optional ein Argument angeben, um den Zeitstempel zu kennzeichnen. Dieses Label wird dann neben dem Marker angezeigt.

## Syntax

```js-nolint
timeStamp(label)
```

### Parameter

- `label` {{Optional_Inline}}
  - : Kennzeichnung für den Zeitstempel.

### Rückgabewert

Kein ({{jsxref("undefined")}}).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("console/time_static", "console.time()")}}
- {{domxref("console/timeLog_static", "console.timeLog()")}}
- {{domxref("console/timeEnd_static", "console.timeEnd()")}}
- [Hinzufügen von Markierungen mit der Console-API](https://web.archive.org/web/20211207010020/https://firefox-source-docs.mozilla.org/devtools-user/performance/waterfall/index.html#adding-markers-with-the-console-api)
