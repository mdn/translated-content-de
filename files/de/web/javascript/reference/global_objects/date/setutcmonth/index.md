---
title: Date.prototype.setUTCMonth()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCMonth
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Die Methode **`setUTCMonth()`** von {{jsxref("Date")}} Instanzen ändert den Monat und/oder den Tag des Monats für dieses Datum entsprechend der Weltzeit.

{{InteractiveExample("JavaScript Demo: Date.prototype.setUTCMonth()")}}

```js interactive-example
const event = new Date("December 31, 1975 23:15:30 GMT-3:00");

console.log(event.toUTCString());
// Expected output: "Thu, 01 Jan 1976 02:15:30 GMT"

console.log(event.getUTCMonth());
// Expected output: 0

event.setUTCMonth(11);

console.log(event.toUTCString());
// Expected output: "Wed, 01 Dec 1976 02:15:30 GMT"
```

## Syntax

```js-nolint
setUTCMonth(monthValue)
setUTCMonth(monthValue, dateValue)
```

### Parameter

- `monthValue`
  - : Ein ganzzahliger Wert, der den Monat repräsentiert: 0 für Januar, 1 für Februar, und so weiter.
- `dateValue` {{optional_inline}}
  - : Ein ganzzahliger Wert von 1 bis 31, der den Tag des Monats repräsentiert.

### Rückgabewert

Ändert das {{jsxref("Date")}} Objekt vor Ort und gibt seinen neuen [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) zurück. Wenn ein Parameter `NaN` ist (oder andere Werte, die auf `NaN` [gezwungen](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) werden, wie `undefined`), wird das Datum auf [Invalid Date](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) gesetzt und `NaN` wird zurückgegeben.

## Beschreibung

Wenn Sie den Parameter `dateValue` nicht angeben, wird der Wert, der von der
{{jsxref("Date/getUTCDate", "getUTCDate()")}} Methode zurückgegeben wird, verwendet.

Wenn ein von Ihnen angegebener Parameter außerhalb des erwarteten Bereichs liegt, versucht `setUTCMonth()`, die Datumsinformationen im {{jsxref("Date")}} Objekt entsprechend zu aktualisieren. Beispielsweise wird, wenn Sie 15 für `monthValue` verwenden, das Jahr um 1 erhöht und 3 für den Monat verwendet.

## Beispiele

### Verwendung von setUTCMonth()

```js
const theBigDay = new Date();
theBigDay.setUTCMonth(11);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Date.prototype.getUTCMonth()")}}
- {{jsxref("Date.prototype.setMonth()")}}
