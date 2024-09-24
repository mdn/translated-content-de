---
title: "console: time() statische Methode"
short-title: time()
slug: Web/API/console/time_static
l10n:
  sourceCommit: d2b78565fb33a7ebfa7314be61f6a887d2d90ace
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

Die **`console.time()`** statische Methode startet einen Timer, mit dem Sie verfolgen können, wie lange eine Operation dauert. Sie geben jedem Timer einen eindeutigen Namen und können bis zu 10.000 Timer auf einer bestimmten Seite laufen lassen. Wenn Sie {{domxref("console/timeEnd_static", "console.timeEnd()")}} mit demselben Namen aufrufen, gibt der Browser die Zeit in Millisekunden aus, die seit dem Start des Timers vergangen ist.

Siehe [Timer](/de/docs/Web/API/console#timers) in der {{domxref("console")}} Dokumentation für Details und Beispiele.

## Syntax

```js-nolint
time()
time(label)
```

### Parameter

- `label` {{optional_inline}}
  - : Ein String, der den Namen darstellt, der dem neuen Timer gegeben werden soll. Dies wird den Timer identifizieren; verwenden Sie denselben Namen, wenn Sie {{domxref("console/timeEnd_static", "console.timeEnd()")}} aufrufen, um den Timer zu stoppen und die Zeit an die Konsole auszugeben. Wenn weggelassen, wird das Label `"default"` verwendet.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Siehe {{domxref("console/timeLog_static", "console.timeLog()")}} und {{domxref("console/timeEnd_static", "console.timeEnd()")}} für Beispiele
- [Microsoft Edge-Dokumentation für `console.time()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/console/api#time)
- [Node.JS-Dokumentation für `console.time()`](https://nodejs.org/docs/latest/api/console.html#consoletimelabel)
- [Google Chrome-Dokumentation für `console.time()`](https://developer.chrome.com/docs/devtools/console/api/#time)
