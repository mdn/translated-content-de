---
title: Date.prototype.setUTCDate()
short-title: setUTCDate()
slug: Web/JavaScript/Reference/Global_Objects/Date/setUTCDate
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`setUTCDate()`**-Methode von {{jsxref("Date")}} Instanzen ändert den Tag des Monats für dieses Datum gemäß der universellen Zeit.

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
  - : Ein Ganzzahlwert von 1 bis 31, der den Tag des Monats darstellt.

### Rückgabewert

Ändert das {{jsxref("Date")}}-Objekt direkt und gibt dessen neuen [Zeitstempel](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) zurück. Wenn `dateValue` `NaN` ist (oder andere Werte, die auf `NaN` [umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion) werden, wie `undefined`), wird das Datum auf [Invalid Date](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) gesetzt und `NaN` wird zurückgegeben.

## Beschreibung

Wenn der `dateValue` außerhalb des Bereichs der Datumswerte für den Monat liegt, wird `setDate()` das {{jsxref("Date")}}-Objekt entsprechend aktualisieren.

Beispielsweise, wenn 0 für `dateValue` angegeben wird, wird das Datum auf den letzten Tag des vorherigen Monats gesetzt. Wenn Sie 40 für `dateValue` verwenden und der Monat im {{jsxref("Date")}}-Objekt Juni ist, wird der Tag auf den 10. geändert und der Monat wird auf Juli erhöht.

Wenn eine negative Zahl für `dateValue` angegeben wird, wird das Datum vom letzten Tag des vorherigen Monats rückwärts gezählt. -1 würde dazu führen, dass das Datum auf 1 Tag vor dem letzten Tag des vorherigen Monats gesetzt wird.

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
