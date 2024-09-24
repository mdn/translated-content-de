---
title: Date.now()
slug: Web/JavaScript/Reference/Global_Objects/Date/now
l10n:
  sourceCommit: 3b5a1c0dfd59257c0a51052a9efa7b0108f8ecca
---

{{JSRef}}

Die statische Methode **`Date.now()`** gibt die Anzahl der Millisekunden zurück, die seit der [Epoche](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) vergangen sind, welche als Mitternacht zu Beginn des 1. Januar 1970, UTC, definiert ist.

{{EmbedInteractiveExample("pages/js/date-now.html")}}

## Syntax

```js-nolint
Date.now()
```

### Parameter

Keine.

### Rückgabewert

Eine Zahl, die den [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) in Millisekunden der aktuellen Zeit repräsentiert.

## Beschreibung

### Reduzierte Zeitpräzision

Um Schutz gegen Timing-Angriffe und [Fingerprinting](/de/docs/Glossary/Fingerprinting) zu bieten, kann die Präzision von `Date.now()` je nach Browsereinstellungen gerundet werden. In Firefox ist die Einstellung `privacy.reduceTimerPrecision` standardmäßig aktiviert und beträgt 2ms. Sie können auch `privacy.resistFingerprinting` aktivieren, in diesem Fall beträgt die Präzision 100ms oder den Wert von `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`, je nachdem welcher größer ist.

Zum Beispiel wird mit reduzierter Zeitpräzision das Ergebnis von `Date.now()` immer ein Vielfaches von 2 oder ein Vielfaches von 100 (oder `privacy.resistFingerprinting.reduceTimerPrecision.microseconds`) sein, wenn `privacy.resistFingerprinting` aktiviert ist.

```js
// reduzierte Zeitpräzision (2ms) in Firefox 60
Date.now();
// Könnte sein:
// 1519211809934
// 1519211810362
// 1519211811670
// …

// reduzierte Zeitpräzision mit aktiviertem `privacy.resistFingerprinting`
Date.now();
// Könnte sein:
// 1519129853500
// 1519129858900
// 1519129864400
// …
```

## Beispiele

### Zeitablauf messen

Sie können `Date.now()` verwenden, um die aktuelle Zeit in Millisekunden zu erhalten und dann eine frühere Zeit subtrahieren, um herauszufinden, wie viel Zeit zwischen den beiden Aufrufen vergangen ist.

```js
const start = Date.now();
doSomeLongRunningProcess();
console.log(`Time elapsed: ${Date.now() - start} ms`);
```

Für komplexere Szenarien möchten Sie vielleicht die [Performance-API](/de/docs/Web/API/Performance_API/High_precision_timing) verwenden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Date.now` in `core-js`](https://github.com/zloirock/core-js#ecmascript-date)
- {{domxref("Performance.now()")}}
- {{domxref("console/time_static", "console.time()")}}
- {{domxref("console/timeEnd_static", "console.timeEnd()")}}
