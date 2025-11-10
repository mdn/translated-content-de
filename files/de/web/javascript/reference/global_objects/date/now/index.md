---
title: Date.now()
short-title: now()
slug: Web/JavaScript/Reference/Global_Objects/Date/now
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`Date.now()`** statische Methode gibt die Anzahl der Millisekunden zurück, die seit dem [Epoch-Zeitpunkt](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) vergangen sind. Dieser ist definiert als Mitternacht zu Beginn des 1. Januar 1970, UTC.

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

Eine Zahl, die den [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) der aktuellen Zeit in Millisekunden darstellt.

## Beschreibung

### Verringerte Zeitpräzision

Um Schutz gegen Timing-Angriffe und {{Glossary("Fingerprinting", "Fingerprinting")}} zu bieten, könnte die Präzision von `Date.now()` je nach Browsereinstellungen gerundet werden. In Firefox ist die Präferenz `privacy.reduceTimerPrecision` standardmäßig aktiviert und auf 2ms voreingestellt. Sie können auch `privacy.resistFingerprinting` aktivieren, wobei die Präzision dann 100ms oder der Wert von `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`, je nachdem welcher größer ist, beträgt.

Zum Beispiel wird mit verringerter Zeitpräzision das Ergebnis von `Date.now()` immer ein Vielfaches von 2 sein, oder ein Vielfaches von 100 (oder `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`) mit aktiviertem `privacy.resistFingerprinting`.

```js
// reduced time precision (2ms) in Firefox 60
Date.now();
// Might be:
// 1519211809934
// 1519211810362
// 1519211811670
// …

// reduced time precision with `privacy.resistFingerprinting` enabled
Date.now();
// Might be:
// 1519129853500
// 1519129858900
// 1519129864400
// …
```

## Beispiele

### Verstrichene Zeit messen

Sie können `Date.now()` verwenden, um die aktuelle Zeit in Millisekunden zu erhalten, dann eine vorherige Zeit subtrahieren, um herauszufinden, wie viel Zeit zwischen den beiden Aufrufen verstrichen ist.

```js
const start = Date.now();
doSomeLongRunningProcess();
console.log(`Time elapsed: ${Date.now() - start} ms`);
```

Für komplexere Szenarien möchten Sie möglicherweise die [Performance API](/de/docs/Web/API/Performance_API/High_precision_timing) verwenden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Date.now` in `core-js`](https://github.com/zloirock/core-js#ecmascript-date)
- [`Performance.now()`](/de/docs/Web/API/Performance/now)
- [`console.time()`](/de/docs/Web/API/console/time_static)
- [`console.timeEnd()`](/de/docs/Web/API/console/timeEnd_static)
