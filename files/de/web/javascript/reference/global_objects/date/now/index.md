---
title: Date.now()
slug: Web/JavaScript/Reference/Global_Objects/Date/now
l10n:
  sourceCommit: 3b5a1c0dfd59257c0a51052a9efa7b0108f8ecca
---

{{JSRef}}

Die statische Methode **`Date.now()`** gibt die Anzahl der Millisekunden zurück, die seit dem [Epoche](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) vergangen sind, welche als Mitternacht am Beginn des 1. Januar 1970 UTC definiert ist.

{{EmbedInteractiveExample("pages/js/date-now.html")}}

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

Um Schutz gegen Timing-Angriffe und {{Glossary("Fingerprinting", "Fingerprinting")}} zu bieten, könnte die Präzision von `Date.now()` je nach Browsereinstellungen gerundet werden. In Firefox ist die Einstellung `privacy.reduceTimerPrecision` standardmäßig aktiviert und beträgt standardmäßig 2 ms. Sie können auch `privacy.resistFingerprinting` aktivieren, wobei die Präzision 100 ms oder der Wert von `privacy.resistFingerprinting.reduceTimerPrecision.microseconds` ist, je nachdem, welcher größer ist.

Zum Beispiel wird bei reduzierter Zeitpräzision das Ergebnis von `Date.now()` immer ein Vielfaches von 2 sein, oder ein Vielfaches von 100 (oder `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`), wenn `privacy.resistFingerprinting` aktiviert ist.

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

Sie können `Date.now()` verwenden, um die aktuelle Zeit in Millisekunden zu erhalten, und dann eine vorherige Zeit abziehen, um herauszufinden, wie viel Zeit zwischen den beiden Aufrufen vergangen ist.

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
- [`console.time()`](/de/docs/Web/API/Console/time_static)
- [`console.timeEnd()`](/de/docs/Web/API/Console/timeEnd_static)
