---
title: "console: time() statische Methode"
short-title: time()
slug: Web/API/console/time_static
l10n:
  sourceCommit: bcc977bc3e79a87edd64cd9ef977b515f63daa2c
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

Die **`console.time()`** statische Methode startet einen Timer, den Sie verwenden können, um die Dauer eines Vorgangs zu verfolgen. Jedem Timer wird ein eindeutiger Name zugewiesen, und Sie können bis zu 10.000 Timer auf einer bestimmten Seite gleichzeitig betreiben. Wenn Sie [`console.timeEnd()`](/de/docs/Web/API/console/timeEnd_static) mit demselben Namen aufrufen, gibt der Browser die verstrichene Zeit in Millisekunden aus, seit der Timer gestartet wurde.

Siehe [Timer](/de/docs/Web/API/console#timers) in der [`console`](/de/docs/Web/API/console)-Dokumentation für Details und Beispiele.

## Syntax

```js-nolint
console.time()
console.time(label)
```

### Parameter

- `label` {{optional_inline}}
  - : Ein String, der den Namen des neuen Timers darstellt. Dieser identifiziert den Timer; verwenden Sie denselben Namen, wenn Sie [`console.timeEnd()`](/de/docs/Web/API/console/timeEnd_static) aufrufen, um den Timer zu stoppen und die Zeit in der Konsole auszugeben. Wenn der Parameter weggelassen wird, wird das Label `"default"` verwendet.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Siehe [`console.timeLog()`](/de/docs/Web/API/console/timeLog_static) und [`console.timeEnd()`](/de/docs/Web/API/console/timeEnd_static) für Beispiele.
- [Microsoft Edge-Dokumentation für `console.time()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools/console/api#time)
- [Node.js-Dokumentation für `console.time()`](https://nodejs.org/docs/latest/api/console.html#consoletimelabel)
- [Google Chrome-Dokumentation für `console.time()`](https://developer.chrome.com/docs/devtools/console/api/#time)
