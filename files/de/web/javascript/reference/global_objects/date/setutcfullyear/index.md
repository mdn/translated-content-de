---
title: Date.prototype.setUTCFullYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCFullYear
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Die Methode **`setUTCFullYear()`** von {{jsxref("Date")}}-Instanzen ändert das Jahr dieses Datums entsprechend der universellen Zeit.

{{InteractiveExample("JavaScript Demo: Date.prototype.setUTCFullYear()")}}

```js interactive-example
const event = new Date("December 31, 1975 23:15:30 GMT-3:00");

console.log(event.getUTCFullYear());
// Expected output: 1976

console.log(event.toUTCString());
// Expected output: "Thu, 01 Jan 1976 02:15:30 GMT"

event.setUTCFullYear(1975);

console.log(event.toUTCString());
// Expected output: "Wed, 01 Jan 1975 02:15:30 GMT"
```

## Syntax

```js-nolint
setUTCFullYear(yearValue)
setUTCFullYear(yearValue, monthValue)
setUTCFullYear(yearValue, monthValue, dateValue)
```

### Parameter

- `yearValue`
  - : Ein ganzzahliger Wert, der das Jahr darstellt. Zum Beispiel 1995.
- `monthValue` {{optional_inline}}
  - : Ein ganzzahliger Wert, der den Monat repräsentiert: 0 für Januar, 1 für Februar, und so weiter.
- `dateValue` {{optional_inline}}
  - : Ein ganzzahliger Wert zwischen 1 und 31, der den Tag des Monats darstellt. Wenn Sie `dateValue` angeben, müssen Sie auch `monthValue` angeben.

### Rückgabewert

Ändert das {{jsxref("Date")}}-Objekt und gibt dessen neuen [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) zurück. Wenn ein Parameter `NaN` ist (oder andere Werte, die zu `NaN` [gewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) werden, wie `undefined`), wird das Datum auf [Ungültiges Datum](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) gesetzt und `NaN` wird zurückgegeben.

## Beschreibung

Wenn Sie die Parameter `monthValue` und `dateValue` nicht angeben, werden die Werte aus den Methoden {{jsxref("Date/getUTCMonth", "getUTCMonth()")}} und {{jsxref("Date/getUTCDate", "getUTCDate()")}} verwendet.

Wenn ein von Ihnen angegebener Parameter außerhalb des erwarteten Bereichs liegt, versucht `setUTCFullYear()`, die anderen Parameter und die Datumsinformationen im {{jsxref("Date")}}-Objekt entsprechend zu aktualisieren. Wenn Sie beispielsweise 15 für `monthValue` angeben, wird das Jahr um 1 erhöht (`yearValue + 1`), und 3 wird für den Monat verwendet.

## Beispiele

### Verwendung von setUTCFullYear()

```js
const theBigDay = new Date();
theBigDay.setUTCFullYear(1997);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Date.prototype.getUTCFullYear()")}}
- {{jsxref("Date.prototype.setFullYear()")}}
