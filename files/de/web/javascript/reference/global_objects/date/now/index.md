---
title: Date.now()
short-title: now()
slug: Web/JavaScript/Reference/Global_Objects/Date/now
l10n:
  sourceCommit: 91b5a448a517239876a4bc92640bbbf29e30b106
---

Die **`Date.now()`** statische Methode gibt die Anzahl der Millisekunden zurück, die seit dem [epoch](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) vergangen sind, welcher als Mitternacht am Anfang des 1. Januar 1970, UTC, definiert ist.

{{InteractiveExample("JavaScript Demo: Date.now()")}}

```js interactive-example
// This example takes 2 seconds to run
const start = Date.now();

console.log("starting timer...");
// Expected output: "starting timer..."

setTimeout(() => {
  const ms = Date.now() - start;

  console.log(`seconds elapsed = ${Math.floor(ms / 1000)}`);
  // Expected output: "seconds elapsed = 2"
}, 2000);
```

## Syntax

```js-nolint
Date.now()
```

### Parameter

Keine.

### Rückgabewert

Eine Zahl, die den [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) in Millisekunden der aktuellen Zeit darstellt.

## Beschreibung

### Reduzierte Zeitpräzision

Um Schutz vor Timing-Angriffen und {{Glossary("Fingerprinting", "Fingerprinting")}} zu bieten, kann die Genauigkeit von `Date.now()` abhängig von den Browsereinstellungen verringert werden.

Der Zeitstempel ist immer eine ganze Anzahl von Millisekunden, daher ist seine Auflösung in allen Kontexten auf 1 ms beschränkt. Dies erfüllt bereits bestimmte grundlegende Sicherheits- und Datenschutzanforderungen.

In Firefox ist die `privacy.reduceTimerPrecision`-Einstellung standardmäßig aktiviert. Bei den Standardeinstellungen hat der Zeitstempel eine Auflösung von 1 ms. Wenn `privacy.resistFingerprinting` aktiviert ist, beträgt das Rundungsintervall 16.667 ms oder das Intervall, das durch `privacy.resistFingerprinting.reduceTimerPrecision.microseconds` konfiguriert ist, je nachdem, welches größer ist. Das Endergebnis wird auf eine ganze Zahl gerundet.

Zum Beispiel sind dies mögliche Werte in Firefox:

```js
// Reduced time precision (1 ms) with default settings
Date.now();
// Might be:
// 1519211809934
// 1519211810363
// 1519211811671
// …

// Reduced time precision with `privacy.resistFingerprinting` enabled
Date.now();
// Might be:
// 1519129853489
// 1519129853506
// 1519129853522
// …
```

## Beispiele

### Erfassene Zeit messen

Sie können `Date.now()` verwenden, um die aktuelle Zeit in Millisekunden zu erhalten, und dann eine vorherige Zeit subtrahieren, um herauszufinden, wie viel Zeit zwischen den beiden Aufrufen vergangen ist.

```js
const start = Date.now();
doSomeLongRunningProcess();
console.log(`Time elapsed: ${Date.now() - start} ms`);
```

Für komplexere Szenarien möchten Sie möglicherweise stattdessen die [Performance-API](/de/docs/Web/API/Performance_API/High_precision_timing) verwenden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Date.now` in `core-js`](https://github.com/zloirock/core-js#ecmascript-date)
- [`Performance.now()`](/de/docs/Web/API/Performance/now)
- [`console.time()`](/de/docs/Web/API/console/time_static)
- [`console.timeEnd()`](/de/docs/Web/API/console/timeEnd_static)
