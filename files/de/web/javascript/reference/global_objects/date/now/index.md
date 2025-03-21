---
title: Date.now()
slug: Web/JavaScript/Reference/Global_Objects/Date/now
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die statische Methode **`Date.now()`** gibt die Anzahl der Millisekunden zurück, die seit der [Epoche](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) vergangen sind. Diese ist definiert als Mitternacht zu Beginn des 1. Januar 1970 (UTC).

{{InteractiveExample("JavaScript Demo: Date.now()")}}

```js interactive-example
// This example takes 2 seconds to run
const start = Date.now();

console.log("starting timer...");
// Expected output: "starting timer..."

setTimeout(() => {
  const millis = Date.now() - start;

  console.log(`seconds elapsed = ${Math.floor(millis / 1000)}`);
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

Eine Zahl, die den [Timestamp](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) in Millisekunden der aktuellen Zeit repräsentiert.

## Beschreibung

### Reduzierte Zeitpräzision

Um Schutz vor Timing-Angriffen und {{Glossary("Fingerprinting", "Fingerprinting")}} zu bieten, kann die Präzision von `Date.now()` abhängig von den Browsereinstellungen gerundet werden. In Firefox ist die Einstellung `privacy.reduceTimerPrecision` standardmäßig aktiviert und hat einen Default-Wert von 2 ms. Sie können auch `privacy.resistFingerprinting` aktivieren; in diesem Fall beträgt die Präzision 100 ms oder den Wert von `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`, je nachdem, welcher größer ist.

Zum Beispiel gibt das Ergebnis von `Date.now()` bei reduzierter Zeitpräzision stets ein Vielfaches von 2 zurück oder bei aktiviertem `privacy.resistFingerprinting` ein Vielfaches von 100 (oder `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`).

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

### Messung der verstrichenen Zeit

Sie können `Date.now()` verwenden, um die aktuelle Zeit in Millisekunden zu erhalten, und dann eine frühere Zeit subtrahieren, um festzustellen, wie viel Zeit zwischen den beiden Aufrufen verstrichen ist.

```js
const start = Date.now();
doSomeLongRunningProcess();
console.log(`Time elapsed: ${Date.now() - start} ms`);
```

Für komplexere Szenarien könnten Sie die [Performance API](/de/docs/Web/API/Performance_API/High_precision_timing) verwenden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Date.now` in `core-js`](https://github.com/zloirock/core-js#ecmascript-date)
- [`Performance.now()`](/de/docs/Web/API/Performance/now)
- [`console.time()`](/de/docs/Web/API/console/time_static)
- [`console.timeEnd()`](/de/docs/Web/API/console/timeEnd_static)
