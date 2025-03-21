---
title: "console: timeStamp() statische Methode"
short-title: timeStamp()
slug: Web/API/console/timeStamp_static
l10n:
  sourceCommit: 6a9ae285caf34cb95ce9f8297d97f7e3d20e8527
---

{{APIRef("Console API")}}{{Non-standard_header}} {{AvailableInWorkers}}

Die statische Methode **`console.timeStamp()`** fügt ein einzelnes Markierungselement zu dem Performance-Tool des Browsers hinzu ([Firefox Fehler 1387528](https://bugzil.la/1387528), [Chrome](https://developer.chrome.com/docs/devtools/performance/reference)). Dies ermöglicht es Ihnen, einen Punkt in Ihrem Code mit den anderen aufgezeichneten Ereignissen in der Zeitleiste, wie Layout- und Malereignissen, zu korrelieren.

Sie können optional ein Argument angeben, um den Zeitstempel zu kennzeichnen, und dieses Label wird dann neben der Markierung angezeigt.

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

- [`console.time()`](/de/docs/Web/API/console/time_static)
- [`console.timeLog()`](/de/docs/Web/API/console/timeLog_static)
- [`console.timeEnd()`](/de/docs/Web/API/console/timeEnd_static)
- [`performance.mark()`](/de/docs/Web/API/Performance/mark)
- [`performance.measure()`](/de/docs/Web/API/Performance/measure)
- [Markierungen mit der Konsole-API hinzufügen](https://web.archive.org/web/20211207010020/https://firefox-source-docs.mozilla.org/devtools-user/performance/waterfall/index.html#adding-markers-with-the-console-api)
