---
title: Date.prototype.setUTCDate()
short-title: setUTCDate()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCDate
l10n:
  sourceCommit: 98972b1f827b7374e28aee591a73044ffd8fb758
---

Die Methode **`setUTCDate()`** von {{jsxref("Date")}}-Instanzen ändert den Tag des Monats für dieses Datum nach Weltzeit.

{{InteractiveExample("JavaScript Demo: Date.prototype.setUTCDate()")}}

```js interactive-example
const event = new Date("August 19, 1975 23:15:30 GMT-3:00");

console.log(event.getUTCDate());
// Expected output: 20

event.setUTCDate(19);

console.log(event.getUTCDate());
// Expected output: 19
```

## Syntax

```js-nolint
setUTCDate(dateValue)
```

### Parameter

- `dateValue`
  - : Eine Ganzzahl von 1 bis 31, die den Tag des Monats angibt.

### Rückgabewert

Ändert das {{jsxref("Date")}}-Objekt direkt und gibt seinen neuen [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) zurück. Wenn `dateValue` `NaN` ist (oder ein anderer Wert, der wie `undefined` in `NaN` [umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) wird), wird das Datum auf [Invalid Date](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) gesetzt und `NaN` zurückgegeben.

## Beschreibung

Wenn `dateValue` außerhalb des gültigen Bereichs für die Tage des Monats liegt, aktualisiert `setUTCDate()` das {{jsxref("Date")}}-Objekt entsprechend.

Wird beispielsweise 0 für `dateValue` übergeben, wird das Datum auf den letzten Tag des vorherigen Monats gesetzt. Wenn Sie 40 für `dateValue` verwenden und im {{jsxref("Date")}}-Objekt der Monat Juni gespeichert ist, wird der Tag auf 10 geändert und der Monat auf Juli erhöht.

Wird für `dateValue` eine negative Zahl übergeben, wird das Datum vom letzten Tag des vorherigen Monats aus rückwärts berechnet. Bei -1 wird das Datum auf einen Tag vor dem letzten Tag des vorherigen Monats gesetzt.

## Beispiele

### Verwendung von setUTCDate()

```js
const theBigDay = new Date();
theBigDay.setUTCDate(20);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Date.prototype.getUTCDate()")}}
- {{jsxref("Date.prototype.setDate()")}}
