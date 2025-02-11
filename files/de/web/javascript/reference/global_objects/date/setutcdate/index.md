---
title: Date.prototype.setUTCDate()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCDate
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`setUTCDate()`**-Methode von {{jsxref("Date")}}-Instanzen ändert den Tag des Monats für dieses Datum basierend auf der universellen Zeit.

{{InteractiveExample("JavaScript Demo: Date.setUTCDate()")}}

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
  - : Eine Ganzzahl von 1 bis 31, die den Tag des Monats darstellt.

### Rückgabewert

Ändert das {{jsxref("Date")}}-Objekt direkt und gibt seinen neuen [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) zurück. Wenn `dateValue` `NaN` ist (oder andere Werte, die zu `NaN` [umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) werden, wie `undefined`), wird das Datum auf [Invalid Date](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) gesetzt und es wird `NaN` zurückgegeben.

## Beschreibung

Wenn der `dateValue` außerhalb des Bereichs der Datumswerte für den Monat liegt, aktualisiert `setDate()` das {{jsxref("Date")}}-Objekt entsprechend.

Zum Beispiel wird das Datum, wenn für `dateValue` der Wert 0 angegeben wird, auf den letzten Tag des vorherigen Monats gesetzt. Wenn Sie 40 für `dateValue` verwenden und der im {{jsxref("Date")}}-Objekt gespeicherte Monat Juni ist, wird der Tag auf den 10. geändert und der Monat auf Juli erhöht.

Wenn eine negative Zahl als `dateValue` angegeben wird, wird das Datum rückwärts vom letzten Tag des vorherigen Monats gezählt. -1 würde dazu führen, dass das Datum auf einen Tag vor dem letzten Tag des vorherigen Monats gesetzt wird.

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
