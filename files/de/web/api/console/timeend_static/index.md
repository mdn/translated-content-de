---
title: "console: timeEnd() statische Methode"
short-title: timeEnd()
slug: Web/API/console/timeEnd_static
l10n:
  sourceCommit: d2b78565fb33a7ebfa7314be61f6a887d2d90ace
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

Die **`console.timeEnd()`** statische Methode stoppt einen Timer, der zuvor durch einen Aufruf von [`console.time()`](/de/docs/Web/API/Console/time_static) gestartet wurde.

Siehe [Timer](/de/docs/Web/API/console#timers) in der Dokumentation für Details und Beispiele.

## Syntax

```js-nolint
timeEnd()
timeEnd(label)
```

### Parameter

- `label` {{optional_inline}}
  - : Ein String, der den Namen des zu stoppenden Timers darstellt. Sobald er gestoppt ist, wird die verstrichene Zeit automatisch in der Konsole angezeigt, zusammen mit einem Hinweis, dass die Zeit beendet ist. Wenn dieser Parameter weggelassen wird, wird das Label "default" verwendet.

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

Das Ergebnis aus dem obigen Beispiel zeigt die Zeit, die der Benutzer benötigt hat, um das erste Alarmfenster zu schließen, gefolgt von der kumulierten Zeit, die der Benutzer benötigt hat, um beide Alarme zu schließen:

![Timer-Ausgabe in der Firefox-Konsole](timer_output.png)

Beachten Sie, dass der Name des Timers angezeigt wird, wenn der Timerwert mit `console.timeLog()` protokolliert wird, und erneut, wenn er gestoppt wird. Darüber hinaus hat der Aufruf von `console.timeEnd()` die zusätzliche Information „timer ended“, um deutlich zu machen, dass der Timer keine Zeit mehr erfasst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Siehe [`console.timeLog()`](/de/docs/Web/API/Console/timeLog_static) für zusätzliche Beispiele
- [`console.time()`](/de/docs/Web/API/Console/time_static)
- [Dokumentation von Microsoft Edge für `console.timeEnd()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/console/api#timeend)
- [Node.JS-Dokumentation für `console.timeEnd()`](https://nodejs.org/docs/latest/api/console.html#consoletimeendlabel)
- [Google Chrome-Dokumentation für `console.timeEnd()`](https://developer.chrome.com/docs/devtools/console/api/#timeend)
