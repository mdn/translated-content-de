---
title: "console: timeLog() statische Methode"
short-title: timeLog()
slug: Web/API/console/timeLog_static
l10n:
  sourceCommit: f2372e442803696ba0fe1c9804096065f2b42824
---

{{APIRef("Console API")}}{{AvailableInWorkers}}

Die **`console.timeLog()`** statische Methode protokolliert den aktuellen Wert eines Timers, der zuvor durch einen Aufruf von [`console.time()`](/de/docs/Web/API/Console/time_static) gestartet wurde.

## Syntax

```js-nolint
console.timeLog()
console.timeLog(label)
console.timeLog(label, val1)
console.timeLog(label, val1, /* …, */ valN)
```

### Parameter

- `label` {{optional_inline}}
  - : Der Name des Timers, der in die Konsole protokolliert werden soll. Wenn dieser weggelassen wird, wird der Name "default" verwendet.
- `valN` {{optional_inline}}
  - : Zusätzliche Werte, die nach der Timer-Ausgabe in die Konsole protokolliert werden sollen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beschreibung

Die `console.timeLog()` Methode protokolliert den aktuellen Wert eines Timers.

Der Methode kann der Name eines Timers übergeben werden. Dies versucht, den Wert eines Timers zu protokollieren, der mit diesem Namen in einem vorherigen Aufruf von [`console.time()`](/de/docs/Web/API/Console/time_static) erstellt wurde:

```js
console.time("reticulating splines");
reticulateSplines();
console.timeLog("reticulating splines");
// reticulating splines: 650ms
```

Wenn der Timer-Name weggelassen wird, wird der Timer `"default"` genannt:

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

Zusätzliche Werte können nach der Timer-Ausgabe in die Konsole protokolliert werden:

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

Die Ausgabe des obigen Beispiels zeigt die Zeit, die der Benutzer benötigt hat, um das erste Warnfeld zu schließen, gefolgt von der kumulierten Zeit, die der Benutzer benötigt hat, um beide Warnmeldungen zu schließen:

```plain
answer time: 2542ms debugger eval code:3:9
answer time: 4161ms - timer ended
```

Beachten Sie, dass der Timer-Name angezeigt wird, wenn der Timerwert mit `console.timeLog()` protokolliert wird und erneut, wenn er gestoppt wird. Zusätzlich enthält der Aufruf von `console.timeEnd()` die zusätzliche Information "timer ended", um klarzustellen, dass der Timer keine Zeit mehr verfolgt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`console.time()`](/de/docs/Web/API/Console/time_static)
- Siehe [`console.timeEnd()`](/de/docs/Web/API/Console/timeEnd_static) für zusätzliche Beispiele
- [Node.JS Dokumentation für `console.timeLog()`](https://nodejs.org/docs/latest/api/console.html#consoletimeloglabel-data)
