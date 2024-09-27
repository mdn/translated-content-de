---
title: "console: timeLog() statische Methode"
short-title: timeLog()
slug: Web/API/console/timeLog_static
l10n:
  sourceCommit: d2b78565fb33a7ebfa7314be61f6a887d2d90ace
---

{{APIRef("Console API")}}{{AvailableInWorkers}}

Die statische Methode **`console.timeLog()`** gibt den aktuellen Wert eines Timers aus, der zuvor durch einen Aufruf von [`console.time()`](/de/docs/Web/API/Console/time_static) gestartet wurde.

## Syntax

```js-nolint
timeLog()
timeLog(label)
timeLog(label, val1)
timeLog(label, val1, /* …, */ valN)
```

### Parameter

- `label` {{optional_inline}}
  - : Der Name des Timers, der in der Konsole protokolliert werden soll. Wenn dieser weggelassen wird, wird das Label "default" verwendet.
- `valN` {{optional_inline}}
  - : Zusätzliche Werte, die nach der Timer-Ausgabe in der Konsole protokolliert werden sollen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beschreibung

Die Methode `console.timeLog()` gibt den aktuellen Wert eines Timers aus.

Der Methode kann der Name eines Timers übergeben werden. Dies versucht, den Wert eines Timers zu protokollieren, der mit diesem Namen in einem vorherigen Aufruf von [`console.time()`](/de/docs/Web/API/Console/time_static) erstellt wurde:

```js
console.time("reticulating splines");
reticulateSplines();
console.timeLog("reticulating splines");
// reticulating splines: 650ms
```

Wenn der Timername weggelassen wird, dann wird der Timer als `"default"` benannt:

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

Wenn kein entsprechender Timer vorhanden ist, protokolliert `console.timeLog()` eine Warnung wie:

```plain
Timer "timer name" doesn't exist.
```

Sie können zusätzliche Werte nach der Timer-Ausgabe in der Konsole protokollieren:

```js
console.time();
reticulateSplines();
console.timeLog("default", "Hello", "world");
// default: 780ms Hello world
```

Siehe [Timer](/de/docs/Web/API/console#timers) in der Dokumentation für weitere Details und Beispiele.

## Beispiele

```js
console.time("answer time");
alert("Click to continue");
console.timeLog("answer time");
alert("Do a bunch of other stuff…");
console.timeEnd("answer time");
```

Die Ausgabe des obigen Beispiels zeigt die Zeit, die der Benutzer benötigt hat, um das erste Alert-Fenster zu schließen, gefolgt von der kumulierten Zeit, die der Benutzer benötigt hat, um beide Alerts zu schließen:

```plain
answer time: 2542ms debugger eval code:3:9
answer time: 4161ms - timer ended
```

Beachten Sie, dass der Name des Timers angezeigt wird, wenn der Timerwert mit `console.timeLog()` protokolliert wird, und erneut, wenn er gestoppt wird. Darüber hinaus enthält der Aufruf von `console.timeEnd()` die zusätzliche Information "timer ended", um eindeutig zu machen, dass der Timer keine Zeit mehr misst.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`console.time()`](/de/docs/Web/API/Console/time_static)
- Siehe [`console.timeEnd()`](/de/docs/Web/API/Console/timeEnd_static) für zusätzliche Beispiele
- [Node.JS-Dokumentation für `console.timeLog()`](https://nodejs.org/docs/latest/api/console.html#consoletimeloglabel-data)
