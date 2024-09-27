---
title: "console: time() statische Methode"
short-title: time()
slug: Web/API/console/time_static
l10n:
  sourceCommit: d2b78565fb33a7ebfa7314be61f6a887d2d90ace
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

Die **`console.time()`** statische Methode startet einen Timer, mit dem Sie verfolgen können, wie lange eine Operation dauert. Sie geben jedem Timer einen eindeutigen Namen und können bis zu 10.000 Timer auf einer gegebenen Seite ausführen lassen. Wenn Sie [`console.timeEnd()`](/de/docs/Web/API/Console/timeEnd_static) mit demselben Namen aufrufen, gibt der Browser die Zeit in Millisekunden aus, die seit dem Start des Timers vergangen ist.

Siehe [Timer](/de/docs/Web/API/console#timers) in der [`console`](/de/docs/Web/API/Console) Dokumentation für Details und Beispiele.

## Syntax

```js-nolint
time()
time(label)
```

### Parameter

- `label` {{optional_inline}}
  - : Ein String, der den Namen darstellt, der dem neuen Timer gegeben werden soll. Dieser wird den Timer identifizieren; verwenden Sie denselben Namen, wenn Sie [`console.timeEnd()`](/de/docs/Web/API/Console/timeEnd_static) aufrufen, um den Timer zu stoppen und die Zeit in der Konsole auszugeben. Wenn weggelassen, wird das Label `"default"` verwendet.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Siehe [`console.timeLog()`](/de/docs/Web/API/Console/timeLog_static) und [`console.timeEnd()`](/de/docs/Web/API/Console/timeEnd_static) für Beispiele
- [Microsoft Edge's Dokumentation für `console.time()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/console/api#time)
- [Node.JS Dokumentation für `console.time()`](https://nodejs.org/docs/latest/api/console.html#consoletimelabel)
- [Google Chromes Dokumentation für `console.time()`](https://developer.chrome.com/docs/devtools/console/api/#time)
