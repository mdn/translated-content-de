---
title: "console: time() statische Methode"
short-title: time()
slug: Web/API/console/time_static
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

Die statische Methode **`console.time()`** startet einen Timer, den Sie verwenden können, um zu verfolgen, wie lange eine Operation dauert. Sie geben jedem Timer einen eindeutigen Namen und können bis zu 10.000 Timer auf einer bestimmten Seite laufen lassen. Wenn Sie [`console.timeEnd()`](/de/docs/Web/API/Console/timeEnd_static) mit demselben Namen aufrufen, gibt der Browser die verstrichene Zeit in Millisekunden aus, die seit dem Starten des Timers vergangen ist.

Siehe [Timer](/de/docs/Web/API/console#timers) in der [`console`](/de/docs/Web/API/Console)-Dokumentation für Details und Beispiele.

## Syntax

```js-nolint
console.time()
console.time(label)
```

### Parameter

- `label` {{optional_inline}}
  - : Ein String, der den Namen darstellt, den Sie dem neuen Timer geben möchten. Dieser identifiziert den Timer; verwenden Sie denselben Namen, wenn Sie [`console.timeEnd()`](/de/docs/Web/API/Console/timeEnd_static) aufrufen, um den Timer zu stoppen und die Zeit in der Konsole auszugeben. Wenn weggelassen, wird das Label `"default"` verwendet.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Siehe [`console.timeLog()`](/de/docs/Web/API/Console/timeLog_static) und [`console.timeEnd()`](/de/docs/Web/API/Console/timeEnd_static) für Beispiele
- [Microsoft Edge-Dokumentation für `console.time()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/console/api#time)
- [Node.js-Dokumentation für `console.time()`](https://nodejs.org/docs/latest/api/console.html#consoletimelabel)
- [Google Chrome-Dokumentation für `console.time()`](https://developer.chrome.com/docs/devtools/console/api/#time)
