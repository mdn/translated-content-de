---
title: "console: time() statische Methode"
short-title: time()
slug: Web/API/console/time_static
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

Die statische Methode **`console.time()`** startet einen Timer, mit dem Sie verfolgen können, wie lange eine Operation dauert. Sie geben jedem Timer einen eindeutigen Namen und können bis zu 10.000 Timer auf einer bestimmten Seite laufen lassen. Wenn Sie [`console.timeEnd()`](/de/docs/Web/API/Console/timeEnd_static) mit demselben Namen aufrufen, gibt der Browser die verstrichene Zeit in Millisekunden aus, seit der Timer gestartet wurde.

Siehe [Timer](/de/docs/Web/API/console#timers) in der Dokumentation von [`console`](/de/docs/Web/API/Console) für Details und Beispiele.

## Syntax

```js-nolint
console.time()
console.time(label)
```

### Parameter

- `label` {{optional_inline}}
  - : Ein String, der den Namen repräsentiert, der dem neuen Timer gegeben werden soll. Dieser wird den Timer identifizieren; verwenden Sie denselben Namen, wenn Sie [`console.timeEnd()`](/de/docs/Web/API/Console/timeEnd_static) aufrufen, um den Timer zu stoppen und die Zeit im Konsolenprotokoll auszugeben. Wenn ausgelassen, wird das Label `"default"` verwendet.

### Rückgabewert

Kein ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Siehe [`console.timeLog()`](/de/docs/Web/API/Console/timeLog_static) und [`console.timeEnd()`](/de/docs/Web/API/Console/timeEnd_static) für Beispiele
- [Microsoft Edge-Dokumentation für `console.time()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/console/api#time)
- [Node.js-Dokumentation für `console.time()`](https://nodejs.org/docs/latest/api/console.html#consoletimelabel)
- [Google Chrome-Dokumentation für `console.time()`](https://developer.chrome.com/docs/devtools/console/api/#time)
