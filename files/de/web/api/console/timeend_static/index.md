---
title: "console: timeEnd() statische Methode"
short-title: timeEnd()
slug: Web/API/console/timeEnd_static
l10n:
  sourceCommit: d2b78565fb33a7ebfa7314be61f6a887d2d90ace
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

Die **`console.timeEnd()`** statische Methode stoppt einen Timer, der zuvor durch den Aufruf von {{domxref("console/time_static", "console.time()")}} gestartet wurde.

Siehe [Timer](/de/docs/Web/API/console#timers) in der Dokumentation für Details und Beispiele.

## Syntax

```js-nolint
timeEnd()
timeEnd(label)
```

### Parameter

- `label` {{optional_inline}}
  - : Ein String, der den Namen des zu stoppenden Timers repräsentiert. Nach dem Stoppen wird die verstrichene Zeit automatisch in der Konsole zusammen mit einem Hinweis angezeigt, dass die Zeit abgelaufen ist. Wenn weggelassen, wird der Standardname "default" verwendet.

### Rückgabewert

Kein ({{jsxref("undefined")}}).

## Beispiele

```js
console.time("answer time");
alert("Click to continue");
console.timeLog("answer time");
alert("Do a bunch of other stuff…");
console.timeEnd("answer time");
```

Die Ausgabe des obigen Beispiels zeigt die Zeit, die der Benutzer benötigt, um das erste Alarmfenster zu schließen, gefolgt von der kumulativen Zeit, die benötigt wurde, um beide Alarme zu schließen:

![Timer-Ausgabe in der Firefox-Konsole](timer_output.png)

Beachten Sie, dass der Name des Timers angezeigt wird, wenn der Timer-Wert mit `console.timeLog()` protokolliert wird und erneut, wenn er gestoppt wird. Zusätzlich enthält der Aufruf von `console.timeEnd()` die zusätzliche Information „timer ended“, um klarzumachen, dass der Timer keine Zeit mehr verfolgt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Siehe {{domxref("console/timeLog_static", "console.timeLog()")}} für zusätzliche Beispiele
- {{domxref("console/time_static", "console.time()")}}
- [Microsoft Edges Dokumentation zu `console.timeEnd()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/console/api#timeend)
- [Node.JS Dokumentation zu `console.timeEnd()`](https://nodejs.org/docs/latest/api/console.html#consoletimeendlabel)
- [Google Chromes Dokumentation zu `console.timeEnd()`](https://developer.chrome.com/docs/devtools/console/api/#timeend)
