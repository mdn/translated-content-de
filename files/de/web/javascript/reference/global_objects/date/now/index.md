---
title: Date.now()
short-title: now()
slug: Web/JavaScript/Reference/Global_Objects/Date/now
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die statische Methode **`Date.now()`** gibt die Anzahl der Millisekunden zurück, die seit der [Epoche](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) vergangen sind. Diese ist als Mitternacht zu Beginn des 1. Januar 1970 (UTC) definiert.

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

### Reduzierte Zeitgenauigkeit

Zum Schutz vor Timing-Angriffen und {{Glossary("Fingerprinting", "Fingerprinting")}} kann die Genauigkeit von `Date.now()` je nach Browsereinstellungen reduziert sein.

Der Zeitstempel ist immer eine ganzzahlige Anzahl von Millisekunden. Seine Auflösung ist daher in allen Kontexten auf 1 ms begrenzt. Dies erfüllt bereits bestimmte grundlegende Anforderungen an Sicherheit und Datenschutz.

In Firefox ist die Einstellung `privacy.reduceTimerPrecision` standardmäßig aktiviert. Mit den Standardeinstellungen hat der Zeitstempel eine Auflösung von 1 ms. Wenn `privacy.resistFingerprinting` aktiviert ist, beträgt das Rundungsintervall 16,667 ms oder den durch `privacy.resistFingerprinting.reduceTimerPrecision.microseconds` konfigurierten Wert, je nachdem, welcher größer ist. Die endgültige Ausgabe wird auf eine ganze Zahl gerundet.

Dies sind beispielsweise mögliche Werte in Firefox:

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

### Vergangene Zeit messen

Mit `Date.now()` können Sie die aktuelle Zeit in Millisekunden ermitteln und davon einen zuvor ermittelten Wert abziehen, um festzustellen, wie viel Zeit zwischen den beiden Aufrufen vergangen ist.

```js
const start = Date.now();
doSomeLongRunningProcess();
console.log(`Time elapsed: ${Date.now() - start} ms`);
```

Für komplexere Szenarien empfiehlt sich stattdessen die [Performance API](/de/docs/Web/API/Performance_API/High_precision_timing).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `Date.now` in `core-js`](https://core-js.io/docs/features/ecmascript/date)
- [`Performance.now()`](/de/docs/Web/API/Performance/now)
- [`console.time()`](/de/docs/Web/API/console/time_static)
- [`console.timeEnd()`](/de/docs/Web/API/console/timeEnd_static)
