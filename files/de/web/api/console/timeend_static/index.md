---
title: "console: timeEnd() statische Methode"
short-title: timeEnd()
slug: Web/API/console/timeEnd_static
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

Die **`console.timeEnd()`** statische Methode stoppt einen Timer, der zuvor durch Aufruf von [`console.time()`](/de/docs/Web/API/Console/time_static) gestartet wurde.

Siehe [Timer](/de/docs/Web/API/console#timers) in der Dokumentation für Details und Beispiele.

## Syntax

```js-nolint
console.timeEnd()
console.timeEnd(label)
```

### Parameter

- `label` {{optional_inline}}
  - : Ein String, der den Namen des zu stoppenden Timers repräsentiert. Sobald der Timer gestoppt ist, wird die verstrichene Zeit automatisch in der Konsole zusammen mit einem Indikator angezeigt, dass die Zeit beendet ist. Wenn er weggelassen wird, wird das Label "default" verwendet.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
console.time("answer time");
alert("Click to continue");
console.timeLog("answer time");
alert("Do a bunch of other stuff…");
console.timeEnd("answer time");
```

Die Ausgabe aus dem obigen Beispiel zeigt die Zeit, die der Benutzer benötigt hat, um das erste Warnfeld zu schließen, gefolgt von der kumulierten Zeit, die der Benutzer benötigte, um beide Warnungen zu schließen:

![Timer-Ausgabe in der Firefox-Konsole](timer_output.png)

Beachten Sie, dass der Name des Timers angezeigt wird, wenn der Timerwert mit `console.timeLog()` protokolliert wird, und erneut, wenn er gestoppt wird. Darüber hinaus hat der Aufruf von `console.timeEnd()` die zusätzliche Information "timer ended", um deutlich zu machen, dass der Timer keine Zeit mehr verfolgt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Siehe [`console.timeLog()`](/de/docs/Web/API/Console/timeLog_static) für zusätzliche Beispiele
- [`console.time()`](/de/docs/Web/API/Console/time_static)
- [Microsoft Edge-Dokumentation zu `console.timeEnd()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/console/api#timeend)
- [Node.js-Dokumentation zu `console.timeEnd()`](https://nodejs.org/docs/latest/api/console.html#consoletimeendlabel)
- [Google Chrome-Dokumentation zu `console.timeEnd()`](https://developer.chrome.com/docs/devtools/console/api/#timeend)
