---
title: "console: timeEnd() statische Methode"
short-title: timeEnd()
slug: Web/API/console/timeEnd_static
l10n:
  sourceCommit: bcc977bc3e79a87edd64cd9ef977b515f63daa2c
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

Die **`console.timeEnd()`** statische Methode stoppt einen Timer, der zuvor durch den Aufruf von [`console.time()`](/de/docs/Web/API/console/time_static) gestartet wurde.

Siehe [Timer](/de/docs/Web/API/console#timers) in der Dokumentation für Details und Beispiele.

## Syntax

```js-nolint
console.timeEnd()
console.timeEnd(label)
```

### Parameter

- `label` {{optional_inline}}
  - : Ein String, der den Namen des zu stoppenden Timers darstellt. Nach dem Stoppen wird die verstrichene Zeit automatisch in der Konsole zusammen mit einem Indikator angezeigt, dass die Zeit beendet ist. Wenn weggelassen, wird das Label "default" verwendet.

### Rückgabewert

None ({{jsxref("undefined")}}).

## Beispiele

```js
console.time("answer time");
alert("Click to continue");
console.timeLog("answer time");
alert("Do a bunch of other stuff…");
console.timeEnd("answer time");
```

Die Ausgabe des obigen Beispiels zeigt die Zeit, die der Benutzer benötigt hat, um das erste Warnfeld zu schließen, gefolgt von der kumulierten Zeit, die der Benutzer benötigt hat, um beide Warnungen zu schließen:

![Ausgabe des Timers in der Firefox-Konsole](timer_output.png)

Beachten Sie, dass der Name des Timers angezeigt wird, wenn der Timer-Wert mit `console.timeLog()` protokolliert wird und erneut, wenn er gestoppt wird. Darüber hinaus enthält der Aufruf von `console.timeEnd()` die zusätzliche Information "timer ended", um klar zu machen, dass der Timer nicht mehr die Zeit verfolgt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Siehe [`console.timeLog()`](/de/docs/Web/API/console/timeLog_static) für zusätzliche Beispiele
- [`console.time()`](/de/docs/Web/API/console/time_static)
- [Microsoft Edge-Dokumentation für `console.timeEnd()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools/console/api#timeend)
- [Node.js-Dokumentation für `console.timeEnd()`](https://nodejs.org/docs/latest/api/console.html#consoletimeendlabel)
- [Google Chrome-Dokumentation für `console.timeEnd()`](https://developer.chrome.com/docs/devtools/console/api/#timeend)
