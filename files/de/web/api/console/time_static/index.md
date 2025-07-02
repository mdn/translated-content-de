---
title: "console: time() static method"
short-title: time()
slug: Web/API/console/time_static
l10n:
  sourceCommit: ab279632b84d201ae9ddd3db3981bf0b01573371
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

Die statische Methode **`console.time()`** startet einen Timer, mit dem Sie die Dauer einer Operation verfolgen können. Sie geben jedem Timer einen eindeutigen Namen und können bis zu 10.000 Timer auf einer bestimmten Seite laufen lassen. Wenn Sie [`console.timeEnd()`](/de/docs/Web/API/console/timeEnd_static) mit demselben Namen aufrufen, gibt der Browser die verstrichene Zeit seit dem Start des Timers in Millisekunden aus.

Siehe [Timer](/de/docs/Web/API/console#timers) in der [`console`](/de/docs/Web/API/console) Dokumentation für Details und Beispiele.

## Syntax

```js-nolint
console.time()
console.time(label)
```

### Parameter

- `label` {{optional_inline}}
  - : Ein String, der den Namen darstellt, der dem neuen Timer gegeben werden soll. Damit wird der Timer identifiziert; verwenden Sie denselben Namen, wenn Sie [`console.timeEnd()`](/de/docs/Web/API/console/timeEnd_static) aufrufen, um den Timer zu stoppen und die Zeit in der Konsole auszugeben. Wenn dieses Argument weggelassen wird, wird der Standardname `"default"` verwendet.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Siehe [`console.timeLog()`](/de/docs/Web/API/console/timeLog_static) und [`console.timeEnd()`](/de/docs/Web/API/console/timeEnd_static) für Beispiele
- [Microsoft Edge Dokumentation zu `console.time()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide/console/api#time)
- [Node.js Dokumentation zu `console.time()`](https://nodejs.org/docs/latest/api/console.html#consoletimelabel)
- [Google Chrome Dokumentation zu `console.time()`](https://developer.chrome.com/docs/devtools/console/api/#time)
