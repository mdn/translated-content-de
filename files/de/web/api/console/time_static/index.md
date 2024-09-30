---
title: "console: time() statische Methode"
short-title: time()
slug: Web/API/console/time_static
l10n:
  sourceCommit: d2b78565fb33a7ebfa7314be61f6a887d2d90ace
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

Die statische Methode **`console.time()`** startet einen Timer, den Sie verwenden können, um zu verfolgen, wie lange eine Operation dauert. Jedem Timer wird ein einzigartiger Name zugewiesen, und Sie können bis zu 10.000 Timer auf einer gegebenen Seite laufen lassen. Wenn Sie [`console.timeEnd()`](/de/docs/Web/API/Console/timeEnd_static) mit demselben Namen aufrufen, gibt der Browser die Zeit in Millisekunden aus, die seit dem Starten des Timers vergangen ist.

Siehe [Timer](/de/docs/Web/API/console#timers) in der [`console`](/de/docs/Web/API/Console) Dokumentation für Details und Beispiele.

## Syntax

```js-nolint
time()
time(label)
```

### Parameter

- `label` {{optional_inline}}
  - : Ein String, der den Namen repräsentiert, der dem neuen Timer gegeben wird. Dieser identifiziert den Timer; verwenden Sie denselben Namen, wenn Sie [`console.timeEnd()`](/de/docs/Web/API/Console/timeEnd_static) aufrufen, um den Timer zu stoppen und die Zeit in der Konsole auszugeben. Wenn dies weggelassen wird, wird das Label `"default"` verwendet.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Siehe [`console.timeLog()`](/de/docs/Web/API/Console/timeLog_static) und [`console.timeEnd()`](/de/docs/Web/API/Console/timeEnd_static) für Beispiele
- [Microsoft Edge-Dokumentation zu `console.time()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/console/api#time)
- [Node.JS-Dokumentation zu `console.time()`](https://nodejs.org/docs/latest/api/console.html#consoletimelabel)
- [Google Chrome-Dokumentation zu `console.time()`](https://developer.chrome.com/docs/devtools/console/api/#time)
