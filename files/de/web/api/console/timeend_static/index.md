---
title: "console: statische Methode timeEnd()"
short-title: timeEnd()
slug: Web/API/console/timeEnd_static
l10n:
  sourceCommit: f2372e442803696ba0fe1c9804096065f2b42824
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

Die statische Methode **`console.timeEnd()`** stoppt einen Timer, der zuvor durch den Aufruf von [`console.time()`](/de/docs/Web/API/Console/time_static) gestartet wurde.

Siehe [Timer](/de/docs/Web/API/console#timers) in der Dokumentation für Details und Beispiele.

## Syntax

```js-nolint
console.timeEnd()
console.timeEnd(label)
```

### Parameter

- `label` {{optional_inline}}
  - : Ein String, der den Namen des zu stoppenden Timers darstellt. Sobald er gestoppt ist, wird die verstrichene Zeit automatisch in der Konsole angezeigt, zusammen mit einem Indikator, dass die Zeit beendet ist. Wenn weggelassen, wird der Standardwert "default" verwendet.

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

Die Ausgabe des obigen Beispiels zeigt die Zeit, die der Benutzer benötigt hat, um das erste Hinweisfenster zu schließen, gefolgt von der kumulierten Zeit, die der Benutzer benötigt hat, um beide Hinweisfenster zu schließen:

![Timer-Ausgabe in der Firefox-Konsole](timer_output.png)

Beachten Sie, dass der Name des Timers angezeigt wird, wenn der Timerwert mit `console.timeLog()` protokolliert wird und erneut, wenn er gestoppt wird. Zusätzlich hat der Aufruf von `console.timeEnd()` die zusätzliche Information "timer ended", um deutlich zu machen, dass der Timer keine Zeit mehr verfolgt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Siehe [`console.timeLog()`](/de/docs/Web/API/Console/timeLog_static) für zusätzliche Beispiele
- [`console.time()`](/de/docs/Web/API/Console/time_static)
- [Microsoft Edge-Dokumentation zu `console.timeEnd()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/console/api#timeend)
- [Node.JS-Dokumentation zu `console.timeEnd()`](https://nodejs.org/docs/latest/api/console.html#consoletimeendlabel)
- [Dokumentation von Google Chrome zu `console.timeEnd()`](https://developer.chrome.com/docs/devtools/console/api/#timeend)
