---
title: "console: timeLog() statische Methode"
short-title: timeLog()
slug: Web/API/console/timeLog_static
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{APIRef("Console API")}}{{AvailableInWorkers}}

Die **`console.timeLog()`** statische Methode protokolliert den aktuellen Wert eines Timers, der zuvor durch Aufruf von [`console.time()`](/de/docs/Web/API/Console/time_static) gestartet wurde.

## Syntax

```js-nolint
console.timeLog()
console.timeLog(label)
console.timeLog(label, val1)
console.timeLog(label, val1, /* …, */ valN)
```

### Parameter

- `label` {{optional_inline}}
  - : Der Name des Timers, der in der Konsole protokolliert werden soll. Wenn dies weggelassen wird, wird das Label "default" verwendet.
- `valN` {{optional_inline}}
  - : Zusätzliche Werte, die nach der Timer-Ausgabe in der Konsole protokolliert werden sollen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beschreibung

Die `console.timeLog()`-Methode protokolliert den aktuellen Wert eines Timers.

Der Methode kann der Name eines Timers übergeben werden. Dies versucht, den Wert eines Timers zu protokollieren, der mit diesem Namen in einem früheren Aufruf von [`console.time()`](/de/docs/Web/API/Console/time_static) erstellt wurde:

```js
console.time("reticulating splines");
reticulateSplines();
console.timeLog("reticulating splines");
// reticulating splines: 650ms
```

Wenn der Timername weggelassen wird, wird der Timer als `"default"` benannt:

```js
console.time();
reticulateSplines();
console.timeLog();
// default: 780ms
```

```js
console.time("default");
reticulateSplines();
console.timeLog();
// default: 780ms
```

Wenn es keinen entsprechenden Timer gibt, protokolliert `console.timeLog()` eine Warnung wie:

```plain
Timer "timer name" doesn't exist.
```

Sie können zusätzliche Werte in die Konsole protokollieren, nachdem die Timer-Ausgabe erfolgt ist:

```js
console.time();
reticulateSplines();
console.timeLog("default", "Hello", "world");
// default: 780ms Hello world
```

Weitere Details und Beispiele finden Sie im Abschnitt [Timer](/de/docs/Web/API/console#timers) in der Dokumentation.

## Beispiele

```js
console.time("answer time");
alert("Click to continue");
console.timeLog("answer time");
alert("Do a bunch of other stuff…");
console.timeEnd("answer time");
```

Die Ausgabe des obigen Beispiels zeigt die Zeit, die dem Benutzer blieb, um das erste Alert-Box zu schließen, gefolgt von der kumulativen Zeit, die der Benutzer brauchte, um beide Alerts zu schließen:

```plain
answer time: 2542ms debugger eval code:3:9
answer time: 4161ms - timer ended
```

Beachten Sie, dass der Timername angezeigt wird, wenn der Timerwert mit `console.timeLog()` protokolliert wird und erneut, wenn er gestoppt wird. Darüber hinaus hat der Aufruf von `console.timeEnd()` die zusätzliche Information "timer ended", um deutlich zu machen, dass der Timer keine Zeit mehr erfasst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`console.time()`](/de/docs/Web/API/Console/time_static)
- Weitere Beispiele finden Sie unter [`console.timeEnd()`](/de/docs/Web/API/Console/timeEnd_static)
- [Node.js-Dokumentation für `console.timeLog()`](https://nodejs.org/docs/latest/api/console.html#consoletimeloglabel-data)
