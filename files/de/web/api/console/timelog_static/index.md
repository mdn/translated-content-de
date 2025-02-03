---
title: "console: timeLog() statische Methode"
short-title: timeLog()
slug: Web/API/console/timeLog_static
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
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
  - : Der Name des Timers, der in die Konsole geloggt werden soll. Wenn dies weggelassen wird, wird das Label "default" verwendet.
- `valN` {{optional_inline}}
  - : Zusätzliche Werte, die nach der Timer-Ausgabe in die Konsole geloggt werden sollen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beschreibung

Die `console.timeLog()`-Methode protokolliert den aktuellen Wert eines Timers.

Der Methode kann der Name eines Timers übergeben werden. Dies wird versuchen, den Wert eines Timers zu protokollieren, der mit diesem Namen in einem vorherigen Aufruf von [`console.time()`](/de/docs/Web/API/Console/time_static) erstellt wurde:

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

Wenn es keinen entsprechenden Timer gibt, loggt `console.timeLog()` eine Warnung wie:

```plain
Timer "timer name" doesn't exist.
```

Sie können zusätzliche Werte nach der Timer-Ausgabe in die Konsole loggen:

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

Die Ausgabe aus dem obigen Beispiel zeigt die Zeit, die der Benutzer benötigt hat, um das erste Warnfenster zu schließen, gefolgt von der kumulierten Zeit, die der Benutzer benötigt hat, um beide Warnungen zu schließen:

```plain
answer time: 2542ms debugger eval code:3:9
answer time: 4161ms - timer ended
```

Beachten Sie, dass der Name des Timers angezeigt wird, wenn der Timer-Wert mit `console.timeLog()` geloggt wird und erneut, wenn er gestoppt wird. Darüber hinaus hat der Aufruf von `console.timeEnd()` die zusätzliche Information "timer ended", um deutlich zu machen, dass der Timer die Zeit nicht mehr verfolgt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`console.time()`](/de/docs/Web/API/Console/time_static)
- Siehe [`console.timeEnd()`](/de/docs/Web/API/Console/timeEnd_static) für zusätzliche Beispiele
- [Node.js Dokumentation für `console.timeLog()`](https://nodejs.org/docs/latest/api/console.html#consoletimeloglabel-data)
